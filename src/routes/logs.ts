import { logger } from '../utils/logger'
import { QueryRestaurants } from "../interfaces"

export const getUserLogs = (req: any, res: any) => {
    logger.trace('getUserLogs');
    const { query, params } = req
    logger.debug('req', { query, params })

    /* TODO: validate params */

    const {
        userId
    } = params
    
    res.send({
        action: 'get-logs-by-user',
        logs: [`Logs user ${userId}`],
        success: true
    });
}

export const getLogs = (req: any, res: any) => {
    logger.trace('getLogs');
    const { query, params } = req
    logger.debug('req', { query, params })

    /* TODO: limit */
    /* TODO: order */

    res.send({
        action: 'get-all-logs',
        logs: [`Àll logs`],
        success: true
    });
}