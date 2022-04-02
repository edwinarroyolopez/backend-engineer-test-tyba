import { logger } from '../utils/logger'
import { QueryMaps } from "../interfaces"
import { searchPlaces } from '../utils/searchPlaces'
import { getRestaurantsModel } from '../models/restaurantsModel';

/**
 * Restaurants controller
 * @test test/unit/controllers/Restaurants.test.ts
 */

/**
  * Get restaurants by latitude and longitude  or city
  * @param {QueryMaps} qRestaurants
  *
  * @returns {Array}
  */
export const getRestaurantsController = async (qRestaurants: QueryMaps) => {
  logger.debug(`getRestaurantsController`, { qRestaurants })
  const restaurants = await searchPlaces(qRestaurants)
  logger.debug(`restarurants`, { restaurants })
  return restaurants
  return await getRestaurantsModel(qRestaurants)
};