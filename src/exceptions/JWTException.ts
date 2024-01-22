import HttpException from './HttpException';
import { AUTH_ERROR_CODES, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class JWTException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.FORBIDDEN,
      AUTH_ERROR_CODES.JWT_EXCEPTION.MESSAGE,
      AUTH_ERROR_CODES.JWT_EXCEPTION.CODE,
    );
  }
}

export default JWTException;
