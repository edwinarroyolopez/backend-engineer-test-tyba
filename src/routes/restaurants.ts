import { logger } from '../utils/logger'
import { QueryRestaurants } from "../interfaces"
import { getRestaurantsController } from '../controllers/restaurantsController';

export const getRestaurants = async (req: any, res: any) => {
    logger.trace('getRestaurants');
    const { query } = req
    logger.debug('req', { query })

    /* TODO: validate params */

    const {
        latitude,
        longitude,
        city
    } = query

    const qRestaurants: QueryRestaurants = {
        latitude,
        longitude,
        city
    }

    const response = await getRestaurantsController(qRestaurants)

    res.send(response);
}
