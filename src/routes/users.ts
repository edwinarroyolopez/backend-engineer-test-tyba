import { logger } from '../utils/logger'
import { UserInput } from "../interfaces"
import { signupController, getAllUsersController } from '../controllers/usersController'

export const signup = async (req: any, res: any) => {
    logger.trace('Signup');
    const { body } = req

    /* TODO: validate user */

    const {
        name,
        phone,
        email,
        password,
        address,
        city
    } = body

    const user: UserInput = {
        name,
        phone,
        email,
        password,
        address,
        city
    }
    const response = await signupController(user)
    res.send(response);
}

export const getAllUsers = async (req: any, res: any) => {
    logger.trace('getAllUsers');
    const { body } = req
    const response = await getAllUsersController()
    res.send(response);
}
