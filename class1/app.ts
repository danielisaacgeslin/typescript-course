import * as express from 'express';
import { urlencoded, json } from 'body-parser';

import { PORT } from './constants';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
