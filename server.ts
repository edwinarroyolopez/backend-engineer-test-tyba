import express from 'express';

const app: express.Application = express();
const port =  3000;

app.get('/', (req, res) => {
    res.send('This is a backend engineer tyba!');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});