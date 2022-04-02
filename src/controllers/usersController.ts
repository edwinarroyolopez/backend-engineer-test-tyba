import { UserInput } from '../interfaces/index'
import { logger } from '../utils/logger'
import { signupModel, getAllUsersModel } from '../models/usersModel';
/**
 * Users controller
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
   return await signupModel(user)
};

export const getAllUsersController = async () => {
  logger.debug(`getAllUsersController`)
  return await getAllUsersModel()
};
