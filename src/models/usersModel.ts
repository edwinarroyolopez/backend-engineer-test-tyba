import { UserInput } from '../interfaces/index'
import { logger } from '../utils/logger'

/**
 * Users model
 */

/**
  * Create a new user
  * @param {UserInput} user
  *
  * @returns {Array}
  */
export const signupModel = async (user: UserInput) => {
  logger.debug(`signupModel`, { user })
  try {
    // throw 'Parameter is not a number!';

    return await {
      action: 'signup',
      success: true,
      message: `User registered ${user.name}`
    }
  } catch (error) {
    logger.error(`signupModel`, { error })
    return {
      action: 'signup',
      success: false,
      error: error
    }
  }
};
