import { logger } from '../../../src/utils/logger'
import {
    signupController
} from '../../../src/controllers/usersController'

describe('SessionController', () => {

  beforeEach(async function() {
    logger.info(`Before Each: Session.test.ts`)
  })

  afterEach(async function() {
    logger.info(`After Each: Session.test.ts`)
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
