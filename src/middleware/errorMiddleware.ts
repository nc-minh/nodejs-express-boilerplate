import { NextFunction, Response as ExpressResponse } from 'express';

import logger from 'utils/logger/logger';
import fmt from 'utils/rest/formatter';
import AppRequest from 'types/rest/AppRequest';
import HttpException from 'exceptions/HttpException';

/**
 * Global handler for Errors sending the message and status
 * @param error
 * @param request
 * @param response
 * @param next
 */
const errorMiddleware = (
  error: HttpException,
  request: AppRequest,
  response: ExpressResponse<any>,
  next: NextFunction,
) => {
  logger.info(`Error Middleware: ${JSON.stringify(error)}`);
  try {
    const apiErrorStatus = (error as any)?.response?.status;
    const status = apiErrorStatus || error?.status || 500;
    const message = error?.message || 'ERROR_MIDDLEWARE';
    const errorCode = error?.errorCode || 'ERROR_MIDDLEWARE';
    const validationErrors = error?.validationErrors;

    response.status(status).send(
      fmt.formatResponse({
        result: new HttpException(status, message, errorCode, validationErrors),
        time: Date.now() - request.startTime,
        message: 'ERROR_MIDDLEWARE',
      }),
    );
  } catch (err) {
    logger.error(`Error ::::::: ${err}`);
    next(err);
  }
};

export { errorMiddleware };
