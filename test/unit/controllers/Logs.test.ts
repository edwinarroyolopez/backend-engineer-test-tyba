import { logger } from '../../../src/utils/logger'
import {
  getUserLogsController,
  getLogsController,  
} from '../../../src/controllers/logsController'
import { assert } from 'chai'

describe('SessionController', () => {

  beforeEach(async function () {
    logger.info(`Before Each: Logs.test.ts`)
  })

  afterEach(async function () {
    logger.info(`After Each: Logs.test.ts`)
  })

  /**
   * Fails
   */


  /**
   * Success
   */
  
  /**
   * Success
   */
   it('.getUserLogsController:  should get the logs from userId  the Db', async () => {
    const userId = '10'
    const response = await getUserLogsController(userId)
    logger.info('response', response)
    assert.equal(response.success, true)
  })


})
