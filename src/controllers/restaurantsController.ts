import { logger } from '../utils/logger'
/**
 * Logs controller
 * @test test/unit/controllers/Restaurants.test.ts
 */

/**
  * Get restaurants by latitude and longitude  or city
  * @param {string} latitude
  * @param {string} longitude
  * @param {string} city
  *
  * @returns {Array}
  */
export const getRestaurantsController = async ({
   latitude,
   longitude,
   city
}: {
   latitude: string,
   longitude: string,
   city: string
}) => {
   logger.debug(`getRestaurantsController`, {
      latitude,
      longitude,
      city
   })
   //return await getRestaurantsModel({  latitude,longitude, city})
};
