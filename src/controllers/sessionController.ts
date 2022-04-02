
import { AuthInput } from '../interfaces/index'
import { logger } from '../utils/logger'
/**
 * Session controller
 * @test test/unit/controllers/Session.test.ts
 */

/**
  * Login with user credentials
  * @param {AuthInput} auth
  *
  * @returns {Prospect}
  */
export const loginController = async (auth: AuthInput) => {
    logger.debug(`signupController`, auth)
    //return await signupModel({ auth })
};


export const logoutController = async ({ param }: any) => {
   logger.debug(`logoutController`)
   //return await logoutModel({ param })
};