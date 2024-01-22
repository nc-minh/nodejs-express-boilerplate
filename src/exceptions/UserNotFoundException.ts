import HttpException from './HttpException';
import { HTTP_RESPONSE_STATUS_CODES, USER_ERROR_CODES } from './errorCode';

class UserNotFoundException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.NOT_FOUND,
      USER_ERROR_CODES.USER_NOT_FOUND.MESSAGE,
      USER_ERROR_CODES.USER_NOT_FOUND.CODE,
    );
  }
}

export default UserNotFoundException;
