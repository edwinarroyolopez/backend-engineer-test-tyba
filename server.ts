import express from 'express';
import * as dotenv from "dotenv";

/* env setting */
dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

const app: express.Application = express();
const port = process.env.API_PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is a backend engineer tyba!');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});