import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import _ from 'lodash';
import { _chain } from 'lodash';
import {config}  from '../config';
@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token =
    (_.chain(req)
    .get('headers.authorization')
    .split(' ')
    .last()
    .value() || _chain(req).get('query.token').value()) as string;

    const key = (_.chain(req).get('headers.x-api-key').value() || _chain(req).get('query.key').value()) as string;
    // authentication using key
    if (key && key === config.APP_KEY)  return next();

    // authentication using token
    if (!token) throw new UnauthorizedException('Unauthorized access');
    try{}
    catch (error) {
      throw new UnauthorizedException('Unauthorized access');
    }
}
}
