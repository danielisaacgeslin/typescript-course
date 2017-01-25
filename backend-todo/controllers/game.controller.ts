import * as express from 'express';

import { BaseController } from './base.controller';
import Logger from '../services/logger';

export default class GameController extends BaseController {
    constructor() {
        super();
    }
    public tableName: string;
    public get(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.json({
            list: [
                { id: 789, name: 'Dark Souls 3' },
                { id: 123, name: 'Battlefield One' },
                { id: 456, name: 'Final Fantasy XV' }
            ]
        });
        next();
    };
    public post(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.json({ post: true });
        next();
    };
    public put(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.json({ put: true });
        next();
    };
    public delete(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.json({ delete: true });
        next();
    };
}