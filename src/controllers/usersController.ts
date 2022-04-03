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
  try {

    const { userRegistered }: any = response
    logger.error(`signupController`, { userRegistered })
    await createLogModel({
      data: response,
      user_id: userRegistered?.id || '',
      type: 'signup'
    })

    return await response
  } catch (error) {
    logger.error(`signupController`, { error })
    return response
  }
};

/**
  * Get all users
  * @returns {Object}
  */
export const getAllUsersController = async () => {
  logger.debug(`getAllUsersController`)

  const response = await getAllUsersModel()
  const { userRegistered } = response
  await createLogModel({
    data: response,
    user_id: userRegistered?.id || '',
    type: 'get-all-users'
  })

  return await response
};