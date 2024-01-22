import HttpException from './HttpException';
import { AUTH_ERROR_CODES, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class AccessDeniedException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.FORBIDDEN,
      AUTH_ERROR_CODES.ACCESS_DENIED.MESSAGE,
      AUTH_ERROR_CODES.ACCESS_DENIED.CODE,
    );
  }
}

export default AccessDeniedException;
