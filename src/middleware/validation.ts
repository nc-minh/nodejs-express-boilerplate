import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request as ExpressRequest } from 'express';
import * as express from 'express';

import HttpException from 'exceptions/HttpException';
import { APP_CONSTANTS } from 'constants/app';
import { ErrorCodes } from 'exceptions/errorCode';
import logger from 'utils/logger/logger';

/**
 * Method to get request validator type based on the parameter.
 *
 */
function getRequestValidator(parameter: string, request: ExpressRequest) {
  let requestValidator;
  switch (parameter) {
    case APP_CONSTANTS.body:
      requestValidator = request.body;
      break;
    case APP_CONSTANTS.params:
      requestValidator = request.params;
      break;
    case APP_CONSTANTS.query:
      requestValidator = request.query;
      break;
  }
  return requestValidator;
}

/**
 * Middleware to validate the request.
 * Validations are performed using class validator
 */
function validationMiddleware(type: any, parameter: string, skipMissingProperties = true): express.RequestHandler {
  return (req, res, next) => {
    try {
      const requestValidator = getRequestValidator(parameter, req);
      const requestBody = plainToInstance(type, requestValidator);
      validate(requestBody, { skipMissingProperties, forbidUnknownValues: true, whitelist: true }).then(
        (errors: ValidationError[]) => {
          if (errors.length > 0) {
            const errorDetail = ErrorCodes.VALIDATION_ERROR;
            next(new HttpException(400, errorDetail.MESSAGE, errorDetail.CODE, errors));
          } else {
            // whitelist only in body of the request
            if (APP_CONSTANTS.body === parameter) {
              req.body = requestBody;
            }
            next();
          }
        },
      );
    } catch (error) {
      logger.error(`validationMiddleware: ${error}`);
    }
  };
}

export { validationMiddleware };
