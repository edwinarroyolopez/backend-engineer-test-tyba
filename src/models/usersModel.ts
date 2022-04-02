import bcrypt from "bcrypt";
import { UserInput } from '../interfaces/index'
import { logger } from '../utils/logger'
import { queryHandler, SCHEMA } from "../database/db";

/**
 * Users model
 */

/* hash encrypt */
const saltRounds = 8;

/**
  * Create a new user
  * @param {UserInput} user
  *
  * @returns {Object}
  */
export const signupModel = async (user: UserInput) => {
  logger.debug(`signupModel`, { user })
  try {
    const {
      name,
      phone,
      email,
      password,
      address,
      city
    } = user

    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(password || '', salt);

    const userExist = await verifyUser({ email: email || '', phone: phone || '' });
    if (userExist && userExist.id) {
      return {
        action: 'signup',
        success: false,
        error: "The user already exists"
      };
    }

    const { rows } = await queryHandler(
      `INSERT INTO ${SCHEMA}.user (
        name,
        phone,
        email,
        password,
        address,
        city,
        created_at
    ) values ($1, $2, $3, $4, $5, $6, current_timestamp)  returning *`,
      [name,
        phone,
        email,
        hash,
        address,
        city]
    );
    const userRegistered = rows[0]
    delete userRegistered.password;

    logger.info('Inserted user:', userRegistered)

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

/**
  * Verify a new user
  * @param {string} email
  * @param {string} phone
  *
  * @returns {Object}
  */
const verifyUser = async ({ email, phone }: { email: string, phone: string }): Promise<any> => {
  logger.debug('verifyUser', { email, phone })

  try {
    const { rows } = await queryHandler(
      `SELECT * FROM ${SCHEMA}.user where email = '${email}' OR phone = '${phone}'`,
      []
    );
    if (rows.length) {
      const { password: hash, ...user } = rows[0];
      return {
        ...user,
      };
    }
    return {
      success: false
    };

  } catch (error) {
    logger.error('verifyUser', error)
    return { success: false, error: error };
  }
};