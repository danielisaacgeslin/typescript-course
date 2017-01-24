import * as express from 'express';

export default class Logger {
    constructor() { }

    public static info(data: any): void {
        console.info(data);
    }

    public static logRequest(req: express.Request, res: express.Response, next: express.NextFunction): void {
        Logger.info(`${req.method} ${req.path} | ${res.statusCode}`);
        next();
    }
};