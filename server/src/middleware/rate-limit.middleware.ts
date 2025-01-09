import { NextFunction, Request, Response } from 'express';

let lastInsertTime: Date | null = null;

export const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const now = new Date();

    if (lastInsertTime && now.getTime() - lastInsertTime.getTime() < 60000) {
        return res.status(429).json({ error: 'Too many requests, please try again later' });
    }

    lastInsertTime = now;
    next();
};
