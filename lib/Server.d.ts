import { Express } from 'express';
export declare class Server {
    private app;
    constructor(app: Express);
    start(port: number): void;
}
