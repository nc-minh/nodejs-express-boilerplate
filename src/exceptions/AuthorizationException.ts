import HttpException from './HttpException';
import { AUTH_ERROR_CODES, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class AuthorizationException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.FORBIDDEN,
      AUTH_ERROR_CODES.AUTHORIZATION_MIDDLEWARE.MESSAGE,
      AUTH_ERROR_CODES.AUTHORIZATION_MIDDLEWARE.CODE,
    );
  }
}

export default AuthorizationException;
