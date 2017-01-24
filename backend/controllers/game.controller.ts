import * as express from 'express';

import Logger from '../services/logger';

export default class GameController {
    constructor() { }

    get(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({list: [{id:1, name: 'Dark Souls 3'}, {id:2, name: 'Battlefield One'}]});
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