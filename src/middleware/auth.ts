import { Response as ExpressResponse, NextFunction } from 'express';

import BearerException from 'exceptions/BearerException';
import UnauthorizedException from 'exceptions/UnauthorizedException';

import AppRequest from 'types/rest/AppRequest';
import JWTPayload from 'types/jwt/JWTPayload';
import verifyAccessToken from 'utils/jwt/verifyAccessToken';
import logger from 'utils/logger/logger';
import UserModel from 'models/schemas/User';
import AuthorizationException from 'exceptions/AuthorizationException';
import JWTRefreshTokenExpiredException from 'exceptions/JWTRefreshTokenExpiredException';
import JWTException from 'exceptions/JWTException';

export const authMiddleware = async (req: AppRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const authHeader = req.headers?.authorization;

    if (!authHeader) {
      return next(new UnauthorizedException());
    }

    const bearerToken = authHeader?.split(' ');

    if (!bearerToken || bearerToken[0] !== 'Bearer') {
      return next(new BearerException());
    }

    const token = bearerToken[1];

    if (!token) {
      return next(new UnauthorizedException());
    }
    const data: JWTPayload = verifyAccessToken(token);

    req.user = data;
    return next();
  } catch (error) {
    logger.error(`Error in authMiddleware: ${error}`);
    if (error.message === 'invalid signature' || error.message === 'jwt malformed') next(new JWTException());
    if (error.message === 'jwt expired') next(new JWTRefreshTokenExpiredException());
    next(new UnauthorizedException());
  }
};

export const adminMiddleware = async (req: AppRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const userInfo = req?.user;

    const user = await UserModel.findById({ _id: userInfo._id });

    if (user.role !== 'ADMIN') {
      return next(new AuthorizationException());
    }

    next();
  } catch (error) {
    logger.error(`Error in adminMiddleware: ${error}`);
    next(new AuthorizationException());
  }
};
