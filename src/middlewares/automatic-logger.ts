import logger from '@/helpers/logger';
import type { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface RequestWithId extends Request {
    requestId?: string;
}

const automaticLogger = (req: RequestWithId, res: Response, next: NextFunction) => {
    const requestId = uuidv4();
    req.requestId = requestId;

    const startTime = Date.now();
    logger.info(`Request received: ${req.method} ${req.url}`, {
        requestId,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        body: req.body,
    });

    res.on('finish', () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        const statusCode = res.statusCode;

        logger.info(`Request completed: ${req.method} ${req.url}`, {
            requestId,
            method: req.method,
            url: req.url,
            params: req.params,
            query: req.query,
            body: req.body,
            statusCode,
            responseTime,
        });
    });

    next();
};

export type { RequestWithId };
export default automaticLogger;
