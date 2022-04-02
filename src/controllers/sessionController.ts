
import { AuthInput, AuthPayload } from '../interfaces/index'
import { logger } from '../utils/logger'
import { createTokens } from '../utils/auth'
import { loginModel } from '../models/sessionModel';
/**
 * Session controller
 * @test test/unit/controllers/Session.test.ts
 */

/**
  * Login with user credentials
  * @param {AuthInput} auth
  *
  * @returns {Object}
  */
export const loginController = async (auth: AuthInput) => {
  logger.debug(`signupController`, auth)

  try {

    const response = await loginModel(auth)

    const {
      tokenData,
      success,
      error
    }: { tokenData: AuthPayload, success: boolean, error: any } = response

    if (success) {
      const [token, refreshToken] = createTokens({ payload: tokenData, refreshSecret: 'aaaa' });
      return {
        token,
        refreshToken,
        success: success,
      }
    }

    throw error
  } catch (error) {
    return {
      action: 'login',
      success: false,
      error: error
    }
  }

};


export const logoutController = async ({ param }: any) => {
  logger.debug(`logoutController`)
  //return await logoutModel({ param })
};