import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '../config/config.service';
export declare class AuthorizationMiddleware implements NestMiddleware {
    private apiToken;
    constructor(config: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
