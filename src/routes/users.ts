import { logger } from '../utils/logger'
import { User } from "../interfaces"

export const signup = (req: any, res: any) => {
    logger.trace('Signup');
    const { body } = req
    logger.debug('req', { body })

    /* TODO: validate user */

    const {
        name,
        phone,
        email,
        address,
        city
    } = body

    const user: User = {
        name,
        phone,
        email,
        address,
        city
    }

    logger.debug(`Signup`, { user });

    res.send({
        action: 'signup',
        message: `User registered ${user.name}`,
        success: true
    });
}
