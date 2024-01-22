import HttpException from './HttpException';
import { AUTH_ERROR_CODES, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class BearerException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED,
      AUTH_ERROR_CODES.BEARER_EXCEPTION.MESSAGE,
      AUTH_ERROR_CODES.BEARER_EXCEPTION.CODE,
    );
  }
}

export default BearerException;
