import { logger } from '../../../src/utils/logger'
import {
    loginController,
    logoutController
} from '../../../src/controllers/sessionController'
import { assert } from 'chai'

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
   it('.login:  should make login  with a email and pass', async () => {
    const ran= Math.floor(Math.random() * 10000)
    const user = {
      phone: '3016453021',
      email: 'ed@gmail.com',
      password: 'abcd.1234',
      otp: '',
    }
    const response = await loginController(user)
    logger.info('response', response)
    assert.equal(response.success, false)
  })

  
})
