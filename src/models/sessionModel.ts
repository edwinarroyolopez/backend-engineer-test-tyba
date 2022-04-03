
import bcrypt from "bcrypt";
import { AuthInput } from '../interfaces/index'
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
      `SELECT * FROM ${SCHEMA}.user where email= '${email}' OR phone = '${phone}'`,
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


export const updateSessionExipireAtModel = async ({ id, lastSessionOperation }: { id: any, lastSessionOperation: string }) => {
  logger.debug(`updateSessionExipireAtModel`)
  try {
    await queryHandler(
      `UPDATE 
          ${SCHEMA}.user
       SET
       last_session_operation='${lastSessionOperation}',
        updated_at=current_timestamp
       WHERE id=${id}`,
      []
    );
    return await { success: true }
  } catch (error) {
    logger.error('updateSessionExipireAtModel', error);
    return await { success: false, error }
  }
};

export const getLastSessionOperationModel = async ({ id }: { id: any }) => {
  logger.debug(`getLastSessionOperationModel`, id)
  try {
    const { rows } = await queryHandler(
      `SELECT last_session_operation FROM ${SCHEMA}.user where id = '${id}'`,
      [])
      logger.debug(`rows`, rows)
    const { last_session_operation: lastSessionOperation } = rows[0]
    return await { success: true, lastSessionOperation }
  } catch (error) {
    logger.error('updateSessionExipireAtModel', error);
    return await { success: false, error }
  }
}

