import { logger } from '../utils/logger'
import { getUserLogsModel, getLogsModel } from '../models/logsModel';
/**
 * Logs controller
 * @test test/unit/controllers/Logs.test.ts
 */

/**
  * Get logs by userId
  * @param {string} userId
  *
  * @returns {Array}
  */
export const getUserLogsController = async (userId: string) => {
  logger.debug(`getUserLogsController`, userId)
  return await getUserLogsModel(userId)
};

/**
  * Get all logs
  * @param {string} limit
  * @param {string} order
  *
  * @returns {Array}
  */
export const getLogsController = async ({ limit, order }: { limit: string, order: string }) => {
  logger.debug(`getLogsController`, { limit, order })
  return await getLogsModel({ limit, order })
};