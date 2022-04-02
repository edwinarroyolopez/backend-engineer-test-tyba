
import { AuthInput, AuthPayload } from '../interfaces/index'
import { logger } from '../utils/logger'

/**
 * Session model
 */

/**
  * Login with user credentials
  * @param {AuthInput} auth
  *
  * @returns {Object}
  */
export const loginModel = async (auth: AuthInput) => {
  logger.debug(`loginModel`, auth)

  try {
    //throw 'Wrong in credentials!';
    const { name, phone }: AuthPayload = auth

    return await {
      tokenData: { name, phone },
      success: true,
      error: {}
    }

  } catch (error) {
    logger.error(`loginModel`, { error })
    return {
      success: false,
      tokenData: {},
      error: error
    }
  }

};


export const logoutModel = async ({ param }: any) => {
  logger.debug(`logoutModel`)
  try {
    //throw 'Wrong in token!';

    return await {
      action: 'logout',
      success: true,
      message: `Login-> `
    }
  } catch (error) {
    logger.error(`logoutModel`, { error })
    return {
      action: 'logout',
      success: false,
      error: error
    }
  }
};