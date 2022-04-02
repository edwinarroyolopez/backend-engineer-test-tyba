import { logger } from '../utils/logger'

/**
 * Logs Model
 */

/**
  * Get logs by userId
  * @param {string} userId
  *
  * @returns {Array}
  */
export const getUserLogsModel = async (userId: string) => {
  logger.debug(`getUserLogsModel`, userId)
  try {
    // throw 'Parameter is not a number!';

    return await {
      action: 'get-logs-by-user',
      logs: [],
      success: true,
    }
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
    // throw 'Parameter is not a number!';

    return await {
      action: 'get-all-logs',
      logs: [],
      success: true,
    }
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

