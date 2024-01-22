import HttpException from './HttpException';
import { HTTP_RESPONSE_STATUS_CODES, USER_ERROR_CODES } from './errorCode';

class DuplicateUserException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.DUPLICATE_DATA,
      USER_ERROR_CODES.DUPLICATE_USER.MESSAGE,
      USER_ERROR_CODES.DUPLICATE_USER.CODE,
    );
  }
}

export default DuplicateUserException;
