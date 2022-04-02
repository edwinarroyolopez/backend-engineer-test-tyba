import express from 'express';
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { logger } from './src/utils/logger'
import routes from "./src/routes"

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

app.get('/', (req, res) => {
    res.send('This is a backend engineer tyba!');
});


app.listen(port, () => {
    return logger.info(`Server is listening on ${port}`);
});