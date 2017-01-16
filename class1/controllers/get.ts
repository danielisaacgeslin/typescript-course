import * as express from 'express';

export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const response: IFirstGetResponse = { status: 1, message: 'Hello' };
    res.json(response);
    next();
}