
import { AuthInput, User } from '../interfaces/index'
import { logger } from '../utils/logger'
import { createTokens } from '../utils/auth'
import { createLogModel } from '../models/logsModel'
import { loginModel, updateSessionExipireAtModel, getLastSessionOperationModel } from '../models/sessionModel';
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
  logger.debug(`loginController`, auth)

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

      const [token, refreshToken] = createTokens({ payload: user || '', refreshSecret: 'JWT_REFRESH_KEY' });
      await updateSessionExipireAtModel({ id: user.id, lastSessionOperation: 'login' })

      await createLogModel({
        data: response,
        user_id: user.id || 0,
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


export const logoutController = async (params: any) => {
  logger.debug(`logoutController`)
  const { user, token } = params

  await updateSessionExipireAtModel({ id: user.id, lastSessionOperation: 'logout' })

  await createLogModel({
    data: { token },
    user_id: user.id,
    type: 'logout'
  })

  return await {
    action: 'logout',
    user: user.name,
    message: 'Closed session...'
  }

};

export const getLastSessionOperationController = async (id: any) => {
  logger.debug(`getLastSessionOperationController`)
  return await getLastSessionOperationModel(id)
};