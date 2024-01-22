export interface CustomError {
  CODE: string;
  MESSAGE: string;
}

export const ERROR_CODES = {
  MONGODB_DUPLICATED_CODE: 11000,
};

export const ErrorCodes: { [key: string]: CustomError } = {
  BAD_REQUEST: {
    CODE: 'BAD_REQUEST',
    MESSAGE: 'Bad request',
  },
  VALIDATION_ERROR: {
    CODE: 'VALIDATION_ERROR',
    MESSAGE: 'Validation failed error',
  },
  NOT_FOUND: {
    CODE: 'NOT_FOUND',
    MESSAGE: 'Not found',
  },
};

export const USER_ERROR_CODES = {
  DUPLICATE_USER: {
    CODE: 'DUPLICATE_USER',
    MESSAGE: 'Account already exists',
  },
  USER_NOT_FOUND: {
    CODE: 'USER_NOT_FOUND',
    MESSAGE: 'User not found',
  },
};

export const UPLOAD_ERROR_CODES = {
  UPLOAD_EXCEPTION: {
    CODE: 'UPLOAD_EXCEPTION',
    MESSAGE: 'The user requested an invalid action due to missing or incorrect file',
  },
};

export const AUTH_ERROR_CODES = {
  LOGIN_EXCEPTION: {
    CODE: 'LOGIN_EXCEPTION',
    MESSAGE: 'The user provided an incorrect password',
  },
  UNAUTHORIZED_MIDDLEWARE: {
    CODE: 'UNAUTHORIZED_MIDDLEWARE',
    MESSAGE: 'Unauthorized users',
  },
  JWT_EXCEPTION: {
    CODE: 'JWT_EXCEPTION',
    MESSAGE: 'Jwt exception',
  },
  JWT_REFRESH_TOKEN_EXPIRED: {
    CODE: 'JWT_REFRESH_TOKEN_EXPIRED',
    MESSAGE: 'Refresh token expired',
  },
  JWT_ACCESS_TOKEN_EXPIRED: {
    CODE: 'JWT_ACCESS_TOKEN_EXPIRED',
    MESSAGE: 'Access token expired',
  },
  BEARER_EXCEPTION: {
    CODE: 'BEARER_EXCEPTION',
    MESSAGE: 'Bearer is missing or malformed',
  },
  AUTHORIZATION_MIDDLEWARE: {
    CODE: 'AUTHORIZATION_MIDDLEWARE',
    MESSAGE: 'The client does not have access rights to the content',
  },
  ACCESS_DENIED: {
    CODE: 'ACCESS_DENIED',
    MESSAGE: 'User does not have permission to access or perform the requested action',
  },
};

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export const HTTP_RESPONSE_STATUS_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  DUPLICATE_DATA: 409,
};
