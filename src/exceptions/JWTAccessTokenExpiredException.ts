import HttpException from './HttpException';
import { AUTH_ERROR_CODES, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class JWTAccessTokenExpiredException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED,
      AUTH_ERROR_CODES.JWT_ACCESS_TOKEN_EXPIRED.MESSAGE,
      AUTH_ERROR_CODES.JWT_ACCESS_TOKEN_EXPIRED.CODE,
    );
  }
}

export default JWTAccessTokenExpiredException;
