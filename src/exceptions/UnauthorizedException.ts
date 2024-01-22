import HttpException from './HttpException';
import { AUTH_ERROR_CODES, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class UnauthorizedException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED,
      AUTH_ERROR_CODES.UNAUTHORIZED_MIDDLEWARE.MESSAGE,
      AUTH_ERROR_CODES.UNAUTHORIZED_MIDDLEWARE.CODE,
    );
  }
}

export default UnauthorizedException;
