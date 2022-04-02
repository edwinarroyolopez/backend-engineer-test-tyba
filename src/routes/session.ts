import { logger } from '../utils/logger'
import { AuthPayload } from "../interfaces"
import { createTokens } from '../utils/auth'

export const login = (req: any, res: any) => {
    logger.trace('Login token');
    const tokenData: AuthPayload = {
        id: 1,
        name: 'Ed',
        phone: '3104242101'
    }
    const [token, refreshToken] = createTokens({ payload: tokenData, refreshSecret: 'aaaa' });
    logger.debug(`Generated tokens`, { token, refreshToken });

    res.send({
        action: 'login',
        token,
        refreshToken
    });
}

export const logout = (req: any, res: any) => {
    logger.trace('Logout token');
    res.send({
        action: 'logout',
        message: 'Closing session...'
    });
}
