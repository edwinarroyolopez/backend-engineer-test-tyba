import { logger } from '../utils/logger'
import { QueryMaps } from "../interfaces"

/**
 * Restaurants Model
 */


/**
  * Get restaurants by latitude and longitude or city
  * @param {QueryMaps} qRestaurants
  *
  * @returns {Array}
  */
export const getRestaurantsModel = async (qRestaurants: QueryMaps) => {
   logger.debug(`getRestaurantsModel`, { qRestaurants })

   try {
      //throw new Error('Wrong in credentials!');

      return await {
         restaurants: [],
         success: true,
         error: {}
      }

   } catch (error) {
      logger.error(`loginModel`, { error })
      return {
         success: false,
         restaurants: {},
         error: error
      }
   }
   //return await getRestaurantsModel({  latitude,longitude, city})
};
