
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv";
import { AuthPayload } from "../interfaces"
import { getLastSessionOperationController } from '../controllers/sessionController'

/* env setting */
dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || 'jx7B9vHSUcJq6pA'
const JWT_REFRESH_TOKEN_EXPIRES: string = process.env.JWT_REFRESH_TOKEN_EXPIRES || '5m'

const createToken = ({ payload, secretKey, expiresIn }: { payload: AuthPayload, secretKey: string, expiresIn: string }) => jwt.sign(payload, secretKey, { expiresIn })

export const createTokens = ({ payload, refreshSecret }: { payload: AuthPayload, refreshSecret: string }) => {
    const token: string = createToken({ payload, secretKey: JWT_SECRET_KEY, expiresIn: JWT_REFRESH_TOKEN_EXPIRES })
    const refreshToken: string = createToken({ payload, secretKey: refreshSecret, expiresIn: JWT_REFRESH_TOKEN_EXPIRES })

    return [
        token,
        refreshToken
    ]
}

export const jwtVerifyToken = (token: string) => jwt.verify(token, String(JWT_SECRET_KEY))

export const isAuthorized = (req: any) => {
    const { headers: { authorization }, originalUrl } = req
    const foundAuth: boolean = routesWithoutAuth.includes(originalUrl)
    if (!foundAuth) {

        try {
            let bearerToken = authorization.split(" ");
            if (isToken(bearerToken)) {
                const userInfo: any = jwtVerifyToken(bearerToken[1])
                req.user = userInfo;
                req.token = bearerToken[1];
                return true
            } else {
                throw new Error("NOT_AUTHORIZED");
            }
        } catch (error) {
            throw new Error("NOT_AUTHORIZED");
        }
    } else {/* route don't need authorization  */
        return true
    }

}

const isToken = (bearerToken: any): boolean => {
    return (
        bearerToken &&
        bearerToken.length > 1 &&
        bearerToken[0].toLowerCase() === "bearer" &&
        bearerToken[1] &&
        bearerToken[1] !== "undefined"
    )
}

/* routes withot auth */
const routesWithoutAuth = [
    "/login",
    "/signup",
];