import express from 'express';
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { logger } from './src/utils/logger'
import routes from "./src/routes"

import { QueryMaps } from "./src/interfaces/index"
import { searchPlaces } from './src/utils/searchPlaces'

/* env setting */
dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));

const port = process.env.API_PORT || 3000;

/* Routes */
app.use(routes);

app.get('/', async (req, res) => {
    const params: QueryMaps = {
        lat: '1',
        lng: '2',
        city: ''
    }
    const response = await searchPlaces(params)
    res.send(response);
});





app.listen(port, () => {
    return logger.info(`Server is listening on ${port}`);
});