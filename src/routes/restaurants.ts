import { logger } from '../utils/logger'
import { QueryMaps } from "../interfaces"
import { isAuthorized } from '../utils/auth'
import { getRestaurantsController } from '../controllers/restaurantsController';

export const getRestaurants = async (req: any, res: any) => {
    logger.trace('getRestaurants');
    const { query } = req
    logger.debug('req', { query })

    /* TODO: validate params */
    if (isAuthorized(req)) {
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
    } else {
        return res.status(403).send("Access Denied");
    }
}