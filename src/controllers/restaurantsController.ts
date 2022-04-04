import { logger } from '../utils/logger'
import { QueryMaps } from "../interfaces"
import { searchPlaces } from '../utils/searchPlaces'
import { createLogModel } from '../models/logsModel'
import { getRestaurantsModel } from '../models/restaurantsModel';

/**
 * Restaurants controller
 * @test test/unit/controllers/Restaurants.test.ts
 */

/**
  * Get restaurants by latitude and longitude  or city
  * @param {QueryMaps} qRestaurants
  * @param {Object} user
  *
  * @returns {Array}
  */
export const getRestaurantsController = async ({ qRestaurants, user }: { qRestaurants: QueryMaps, user: any }) => {
  logger.debug(`getRestaurantsController`, { qRestaurants })

  const restaurants = await searchPlaces(qRestaurants)

  logger.debug(`restarurants`, { restaurants })

  await createLogModel({
    data: { query: qRestaurants, length: restaurants.data.length, restaurants },
    user_id: user.id,
    type: 'get-restaurants'
  })

  return restaurants
};