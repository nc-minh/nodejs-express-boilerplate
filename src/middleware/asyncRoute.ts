import { NextFunction, Response as ExpressResponse } from 'express';
import AppRequest from 'types/rest/AppRequest';

export const asyncRouteHandler = (fn: (arg0: AppRequest, arg1: ExpressResponse, arg2: NextFunction) => any) => {
  return async (req: AppRequest, res: ExpressResponse, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
