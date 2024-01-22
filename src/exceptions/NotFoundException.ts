import HttpException from './HttpException';
import { ErrorCodes, HTTP_RESPONSE_STATUS_CODES } from './errorCode';

class NotFoundException extends HttpException {
  constructor() {
    super(HTTP_RESPONSE_STATUS_CODES.NOT_FOUND, ErrorCodes.NOT_FOUND.MESSAGE, ErrorCodes.NOT_FOUND.CODE);
  }
}

export default NotFoundException;
