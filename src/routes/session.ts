import { logger } from '../utils/logger'
import { AuthInput } from "../interfaces"
import { loginController } from '../controllers/sessionController'

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
    res.send({response});
}

export const logout = (req: any, res: any) => {
    logger.trace('Logout token');
    res.send({
        action: 'logout',
        message: 'Closing session...'
    });
}