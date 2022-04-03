
import { AuthInput, User } from '../interfaces/index'
import { logger } from '../utils/logger'
import { createTokens } from '../utils/auth'
import { createLogModel } from '../models/logsModel'
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

    const response: any = await loginModel(auth)

    const {
      user,
      success,
      error
    }: {
      user: User,
      success: boolean,
      error: any
    } = response

    if (success) {
      // const refreshSecret = process.env.JWT_REFRESH_KEY + user.id;

      const [token, refreshToken] = createTokens({ payload: user || '', refreshSecret: 'aaaa' });

      await createLogModel({
        data: response,
        user_id: 1,
        type: 'login'
      })

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
  await createLogModel({
    data: {},
    user_id: 1,
    type: 'logout'
  })

  //return await logoutModel({ param })
};