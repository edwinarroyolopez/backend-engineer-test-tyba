import { UserInput } from '../interfaces/index'
import { logger } from '../utils/logger'
/**
 * Logs controller
 * @test test/unit/controllers/Users.test.ts
 */

/**
  * Get restaurants by latitude and longitude  or city
  * @param {UserInput} user
  *
  * @returns {Array}
  */
export const signupController = async (user: UserInput) => {
   logger.debug(`signupController`, { user })
   //return await signupModel({  latitude,longitude, city})
};
