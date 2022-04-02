import { logger } from '../utils/logger'
import { QueryMaps, AddressComponentMaps } from "../interfaces"
import axios from "axios";
import * as dotenv from "dotenv";

/* env setting */
dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

const APIKEY_GOOGLE_MAPS: string = process.env.APIKEY_GOOGLE_MAPS || ''
const URL_BASE: string = 'https://maps.googleapis.com/maps/api'

const KEY_CITY = 'administrative_area_level_1'
const KEY_DEPARTMENT = 'administrative_area_level_2'


export const searchPlaces = async (queryMaps: QueryMaps) => {
    logger.trace('searchPlaces', { APIKEY_GOOGLE_MAPS });

    const {
        lat,
        lng,
        city,
        keyWord
    } = queryMaps


    if (city !== '' && city) {
        const url = `${URL_BASE}/place/textsearch/json?query=restaurants+${city}+colombia&key=${APIKEY_GOOGLE_MAPS}`
        return await GO_API(url)
    } else {
        const location: any = await getTextFromLatitudLongitude({ lat: lat || '', lng: lng || '' })
        const firsResult = location ? location.data[0] : {}
        const { address_components } = firsResult || {}

        logger.debug('address_components', { address_components })
        const resultDestructure = destructureLocation(address_components)
        logger.debug('resultDestructure', { resultDestructure })

        const url = `${URL_BASE}/place/textsearch/json?query=restaurants+${resultDestructure}+colombia&key=${APIKEY_GOOGLE_MAPS}`
        logger.debug('newUrl', { url })
        return await GO_API(url)
    }
}

const getTextFromLatitudLongitude = async ({ lat, lng }: { lat: string, lng: string }) => {
    const url = `${URL_BASE}/geocode/json?latlng=${lat},${lng}&key=${APIKEY_GOOGLE_MAPS}`
    const response = await GO_API(url)
    return await response
}

const GO_API = async (url: string) => {
    try {
        const resp = await axios.get(url);
        return {
            data: resp.data.results,
            success: true
        }
    } catch (err) {
        logger.error('searchPlaces', err);
        return {
            error: err,
            success: false
        }
    }
}

const destructureLocation = (address_components: [AddressComponentMaps]) => {
    const locationComponents = address_components.filter((item: AddressComponentMaps) => item.types.includes(KEY_CITY) || item.types.includes(KEY_DEPARTMENT))
    return locationComponents.map((component: AddressComponentMaps) => component.long_name).join('+').toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[-\s]/g, '_');
}