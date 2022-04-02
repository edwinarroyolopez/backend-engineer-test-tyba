
import bcrypt from "bcrypt";
import { AuthInput, AuthPayload } from '../interfaces/index'
import { logger } from '../utils/logger'
import { queryHandler, SCHEMA } from "../database/db";

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
    const { email, phone, password, otp } = auth

    const { rows } = await queryHandler(
      `SELECT * FROM ${SCHEMA}.user where email = '${email}' OR phone = '${phone}'`,
      []
    );

    if (rows.length) {
      const { password: hash, ...user } = rows[0];
      const valid = bcrypt.compareSync(password || '', hash);
      if (valid) {
        logger.info('User valid', valid)
        return await {
          user: user || {},
          success: true,
          error: {}
        }
      }
    }

    throw new Error(`User not found!`)

  } catch (error) {
    logger.error(`loginModel`, { error })
    return {
      success: false,
      user: {},
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