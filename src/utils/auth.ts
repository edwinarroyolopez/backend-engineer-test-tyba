import jwt from "jsonwebtoken"
import { AuthPayload } from "../interfaces"

const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || 'jx7B9vHSUcJq6pA'
const JWT_REFRESH_TOKEN_EXPIRES: string = process.env.JWT_REFRESH_TOKEN_EXPIRES || '1d'

const createToken = ({ payload, secretKey, expiresIn }: { payload: AuthPayload, secretKey: string, expiresIn: string }) => jwt.sign(payload, secretKey, { expiresIn })

export const createTokens = ({ payload, refreshSecret }: { payload: AuthPayload, refreshSecret: string }) => {
    const token: string = createToken({ payload, secretKey: JWT_SECRET_KEY, expiresIn: JWT_REFRESH_TOKEN_EXPIRES })
    const refreshToken: string = createToken({ payload, secretKey: refreshSecret, expiresIn: JWT_REFRESH_TOKEN_EXPIRES })

    return [
        token,
        refreshToken
    ]
}

export const jwtVerifyToken = (token: string) => jwt.verify(token, String(process.env.JWT_SECRET_KEY))
