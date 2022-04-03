import { logger } from '../utils/logger'
import { AuthInput } from "../interfaces"
import { isAuthorized } from '../utils/auth'
import { loginController, logoutController, getLastSessionOperationController } from '../controllers/sessionController'

export const login = async (req: any, res: any) => {
    logger.trace('Login token');

    const { body } = req

    const {
        phone,
        email,
        password,
        otp
    } = body

    const auth: AuthInput = {
        phone,
        email,
        password,
        otp
    }

    const response = await loginController(auth)
    res.send(response);
}

export const logout = async (req: any, res: any) => {
    logger.trace('Logout');
    try {
        if (isAuthorized(req)) {
            const { user, token } = req
            const { lastSessionOperation } = await getLastSessionOperationController({ id: user.id })
            if (lastSessionOperation === 'logout') {
                throw new Error("NOT_AUTHORIZED");
            }

            const response = await logoutController({ user, token })
            res.send(response);
        } else {
            throw new Error("NOT_AUTHORIZED");
        }
    } catch (error) {
        return res.status(403).send("Access Denied");
    }
}