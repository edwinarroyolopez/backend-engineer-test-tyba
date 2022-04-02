import { logger } from '../../../src/utils/logger'
import {
  getUserLogsController,
  getLogsController
} from '../../../src/controllers/logsController'

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
  const sum = (a: number, b: number): number => {
    return a + b
  }


  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });


})
