import { UserInput } from '../interfaces/index'
import { logger } from '../utils/logger'
import { createLogModel } from '../models/logsModel'
import { signupModel, getAllUsersModel } from '../models/usersModel';

/**
 * Users controller
 * @test test/unit/controllers/Users.test.ts
 */

/**
  * Create a user
  * @param {UserInput} user
  *
  * @returns {Object}
  */
export const signupController = async (user: UserInput) => {
  logger.debug(`signupController`, { user })

  const response = await signupModel(user)
  
  await createLogModel({
    data: response,
    user_id: 1,
    type: 'signup'
  })

  return await response
};

/**
  * Get all users
  * @returns {Object}
  */
export const getAllUsersController = async () => {
  logger.debug(`getAllUsersController`)

  const response = await getAllUsersModel()

  await createLogModel({
    data: response,
    user_id: 1,
    type: 'get-all-users'
  })

  return await response
};
