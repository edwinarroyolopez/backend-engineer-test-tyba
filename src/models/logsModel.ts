import { logger } from '../utils/logger'
import { LogInput } from '../interfaces/index'
import { queryHandler, SCHEMA } from "../database/db";

/**
 * Logs Model
 */

/**
  * Get logs by userId
  * @param {LogInput} log
  *
  * @returns {Object}
  */
export const createLogModel = async (log: LogInput) => {
  logger.debug(`createLogModel`, log)
  try {
    const {
      data,
      type,
      user_id
    }: LogInput = log

    const { rows } = await queryHandler(
      `INSERT INTO ${SCHEMA}.log (
        data,
        type,
        user_id,
        created_at
    ) values ($1, $2, $3, current_timestamp)  returning *`,
      [data,
        type,
        user_id]
    );

    return await {
      action: 'create-log',
      log: rows[0],
      success: true,
    }
  } catch (error) {
    logger.error(`createLogModel`, { error })
    return {
      action: 'create-log',
      success: false,
      error: error
    }
  }
};

/**
  * Get logs by userId
  * @param {string} userId
  *
  * @returns {Object}
  */
export const getUserLogsModel = async (userId: string) => {
  logger.debug(`getUserLogsModel`, userId)
  try {
    const { rows } = await queryHandler(
      `SELECT 
        data,
        type,
        user_id,
        created_at
      FROM ${SCHEMA}.log where user_id=$1 order by id desc`,
      [userId]
    );
    return {
      success: true,
      logs: rows,
      action: 'get-logs-by-user',
    };

  } catch (error) {
    logger.error(`getUserLogsModel`, { error })
    return {
      action: 'get-logs-by-user',
      success: false,
      error: error
    }
  }
};

/**
  * Get all logs
  * @param {string} limit
  * @param {string} order
  *
  * @returns {Array}
  */
export const getLogsModel = async ({ limit, order }: { limit: string, order: string }) => {
  logger.debug(`getLogsModel`, { limit, order })

  try {
    const { rows } = await queryHandler(
      `SELECT 
        data,
        type,
        user_id,
        created_at
      FROM ${SCHEMA}.log order by id  ${order} limit ${limit}`,
      []
    );

    return {
      success: true,
      logs: rows,
      action: 'get-all-logs',
    };

  } catch (error) {
    logger.error(`getLogsModel`, { error })
    return {
      action: 'get-all-logs',
      logs: [],
      success: false,
      error: error
    }
  }
};

