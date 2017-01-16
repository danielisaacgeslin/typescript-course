import * as express from 'express';
import { urlencoded, json } from 'body-parser';
import { PORT } from './constants';
import { get } from './controllers/';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', get);


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
