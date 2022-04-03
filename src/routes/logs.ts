import { logger } from '../utils/logger'
import { isAuthorized } from '../utils/auth'
import { getUserLogsController, getLogsController } from '../controllers/logsController';

export const getUserLogs = async (req: any, res: any) => {
    logger.trace('getUserLogs');
    const { query, params } = req
    logger.debug('req', { query, params })

    /* TODO: validate params */

    const {
        userId
    } = params

    const response = await getUserLogsController(userId)
    if (isAuthorized(req)) {
        res.send(response);
    } else {
        return res.status(403).send("Access Denied");
    }
}

export const getLogs = async (req: any, res: any) => {
    logger.trace('getLogs');
    const { query, params } = req
    logger.debug('req', { query, params })
    if (isAuthorized(req)) {
        /* TODO: limit */
        /* TODO: order */
        const { limit, order }: { limit: string, order: string } = { limit: '10', order: 'desc' }

        const response = await getLogsController({ limit, order })
        res.send(response);
    } else {
        return res.status(403).send("Access Denied");
    }
}