import BadRequestException from 'exceptions/BadRequestException';
import UploadException from 'exceptions/UploadException';

export const uploadFile = async (file: Express.Multer.File) => {
  try {
    if (!file) {
      return new UploadException();
    }
    return file;
  } catch (error) {
    throw new BadRequestException();
  }
};
