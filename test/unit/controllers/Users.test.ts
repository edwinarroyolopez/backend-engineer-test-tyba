import { logger } from '../../../src/utils/logger'
import { assert } from 'chai'
import {
  signupController
} from '../../../src/controllers/usersController'

describe('SessionController', () => {

  beforeEach(async function () {
    logger.info(`Before Each: Session.test.ts`)
  })

  afterEach(async function () {
    logger.info(`After Each: Session.test.ts`)
  })

  /**
   * Fails
   */


  /**
   * Success
   */
  it('.signup:  should save the user into the Db', async () => {
    const ran= Math.floor(Math.random() * 10000)
    const user = {
      name: 'Ed',
      phone: '3016453021',
      email: `ed${ran}@gmail.com`,
      address: 'Calle 44 # 105-10',
      city: 'Medellin',
      password: 'abcd.1234'
    }
    const response = await signupController(user)
    logger.info('response', response)
    assert.equal(response.success, false)
  })

})
