import { logger } from '../utils/logger'
import { QueryRestaurants } from "../interfaces"
import { getRestaurantsModel } from '../models/restaurantsModel';

/**
 * Restaurants controller
 * @test test/unit/controllers/Restaurants.test.ts
 */

/**
  * Get restaurants by latitude and longitude  or city
  * @param {QueryRestaurants} qRestaurants
  *
  * @returns {Array}
  */
export const getRestaurantsController = async (qRestaurants: QueryRestaurants) => {
   logger.debug(`getRestaurantsController`, { qRestaurants })
   return await getRestaurantsModel(qRestaurants)
};