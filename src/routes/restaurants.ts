import { logger } from '../utils/logger'
import { QueryRestaurants } from "../interfaces"

export const getRestaurants = (req: any, res: any) => {
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

    res.send({
        action: 'get-restaurants',
        restaurants: [{ qRestaurants }],
        success: true
    });
}
