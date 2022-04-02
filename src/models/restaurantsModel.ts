import { logger } from '../utils/logger'
import { QueryRestaurants } from "../interfaces"

/**
 * Restaurants Model
 */


/**
  * Get restaurants by latitude and longitude or city
  * @param {QueryRestaurants} qRestaurants
  *
  * @returns {Array}
  */
export const getRestaurantsModel = async (qRestaurants: QueryRestaurants) => {
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
