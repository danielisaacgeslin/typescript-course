import * as express from 'express';

import { BaseController } from './base.controller';
import Logger from '../services/logger';

export default class GameController extends BaseController {
    public tableName: string;

    constructor() {
        super();
    }

    get(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({
            list: [
                { id: 789, name: 'Dark Souls 3' },
                { id: 123, name: 'Battlefield One' },
                { id: 456, name: 'Final Fantasy XV' },
                { id: 917, name: 'The Sims 4' },
                { id: 798, name: 'Diablo 3' }
            ]
        });
        next();
    }

    post(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({ id: Date.now() });
        next();
    }

    put(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({ id: Number(req.params.id) });
        next();
    }

    delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({ id: Number(req.params.id) });
        next();
    }
}