import HttpException from './HttpException';
import { ErrorCodes, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class BadRequestException extends HttpException {
  constructor() {
    super(HTTP_RESPONSE_STATUS_CODES.BAD_REQUEST, ErrorCodes.BAD_REQUEST.MESSAGE, ErrorCodes.BAD_REQUEST.CODE);
  }
}

export default BadRequestException;
