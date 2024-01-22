import HttpException from './HttpException';
import { HTTP_RESPONSE_STATUS_CODES, UPLOAD_ERROR_CODES } from './errorCode';

class UploadException extends HttpException {
  constructor() {
    super(
      HTTP_RESPONSE_STATUS_CODES.BAD_REQUEST,
      UPLOAD_ERROR_CODES.UPLOAD_EXCEPTION.MESSAGE,
      UPLOAD_ERROR_CODES.UPLOAD_EXCEPTION.CODE,
    );
  }
}

export default UploadException;
