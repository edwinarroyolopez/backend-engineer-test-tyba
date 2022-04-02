import express from 'express';
import * as dotenv from "dotenv";
import { AuthPayload } from "./src/interfaces"
import { logger } from './src/utils/logger'
import { createTokens } from './src/utils/auth'

/* env setting */
dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

const app: express.Application = express();
const port = process.env.API_PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is a backend engineer tyba!');
});

app.get('/generate-token', (req, res) => {

    logger.trace('Generate token');
    const tokenData: AuthPayload = {
        id: 1,
        name: 'Ed',
        phone: '3104242101'
    }
    const [token, refreshToken] = createTokens({ payload: tokenData, refreshSecret: 'aaaa' });

    res.send({
        token, refreshToken
    });
});


app.listen(port, () => {
    return logger.info(`Server is listening on ${port}`);
});