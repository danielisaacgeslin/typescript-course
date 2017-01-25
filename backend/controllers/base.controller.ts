import * as express from 'express';

export abstract class BaseController {
    public abstract tableName: string;
    public abstract get(req: express.Request, res: express.Response, next: express.NextFunction): void;
    public abstract post(req: express.Request, res: express.Response, next: express.NextFunction): void;
    public abstract put(req: express.Request, res: express.Response, next: express.NextFunction): void;
    public abstract delete(req: express.Request, res: express.Response, next: express.NextFunction): void;
}