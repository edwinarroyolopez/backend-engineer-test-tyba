import { logger } from '../utils/logger'
import { AuthInput } from "../interfaces"
import { loginController, logoutController } from '../controllers/sessionController'

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
    logger.trace('Logout token');
    const param = ''
    const response = await logoutController(param)
    res.send(response);
}