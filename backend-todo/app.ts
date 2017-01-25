import * as express from 'express';
import { urlencoded, json } from 'body-parser';

import { PORT } from './config/constants';
import allowCrossDomain from './services/allowCrossDomain'; 
import Logger from './services/logger';
import GameController from './controllers/game.controller';

const gameCtrl = new GameController();

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(allowCrossDomain)

app.all('*', Logger.logRequest);

/* game */
app.get('/game', gameCtrl.get);
app.post('/game', gameCtrl.post);
app.put('/game', gameCtrl.put);
app.delete('/game', gameCtrl.delete);


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
