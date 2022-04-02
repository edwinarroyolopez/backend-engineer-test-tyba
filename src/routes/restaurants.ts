import { logger } from '../utils/logger'
import { QueryMaps } from "../interfaces"
import { getRestaurantsController } from '../controllers/restaurantsController';

export const getRestaurants = async (req: any, res: any) => {
    logger.trace('getRestaurants');
    const { query } = req
    logger.debug('req', { query })

    /* TODO: validate params */

    const {
        lat,
        lng,
        city
    } = query

    const qRestaurants: QueryMaps = {
        lat,
        lng,
        city
    }

    const response = await getRestaurantsController(qRestaurants)

    res.send(response);
}