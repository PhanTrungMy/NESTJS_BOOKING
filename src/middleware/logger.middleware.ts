
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const ipAddress =req.headers['x-forwarded-for'] ;
    console.log(req.headers);
    console.log(`Request:${req.method} ${req.originalUrl} from ${ipAddress}`);
    next();
  }
}

