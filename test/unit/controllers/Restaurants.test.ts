import { logger } from '../../../src/utils/logger'
import {
  getRestaurantsController
} from '../../../src/controllers/restaurantsController'
import { assert } from 'chai'

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
   it('.getRestaurantsController:  should get the restaurant data using as param a ciry  the Db', async () => {
    const qMaps = {
      lat: '0',
      lng: '0',
      city: 'medellin',
    }
    const response = await getRestaurantsController(qMaps)
    logger.info('response', response)
    assert.equal(response.success, true)
  })

  
  
})
