import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  private apiToken: string;
  constructor(config: ConfigService) {
    this.apiToken = config.get('API_TOKEN');
  }
  use(req: Request, res: Response, next: NextFunction) {
    req.headers.authorization = `Bearer ${process.env.API_TOKEN}`;

    next();
  }
}
