import { logger } from '../utils/logger'
import { UserInput } from "../interfaces"
import { isAuthorized } from '../utils/auth'
import { signupController, getAllUsersController } from '../controllers/usersController'

export const signup = async (req: any, res: any) => {
    logger.trace('Signup');
    const { body } = req

    /* TODO: validate user */
    if (isAuthorized(req)) {
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
    } else {
        return res.status(403).send("Access Denied");
    }
}

export const getAllUsers = async (req: any, res: any) => {
    logger.trace('getAllUsers');
    if (isAuthorized(req)) {
        const response = await getAllUsersController()
        res.send(response);
    } else {
        return res.status(403).send("Access Denied");
    }
}
