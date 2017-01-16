import * as express from 'express';

export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.json({ message: 'Hello World' });
    next();
}