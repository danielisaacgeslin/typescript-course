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
                { id: 456, name: 'Final Fantasy XV' }
            ]
        });
        next();
    }

    post(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({ post: true });
        next();
    }

    put(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({ put: true });
        next();
    }

    delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({ delete: true });
        next();
    }
}