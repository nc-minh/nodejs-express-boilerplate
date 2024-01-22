import JWT from 'jsonwebtoken';

import config from 'config';
import logger from 'utils/logger/logger';
import JWTPayload from 'types/jwt/JWTPayload';

const verifyRefreshToken = (token: string) => {
  try {
    const secret = config.jwt.refreshTokenSecret;

    return JWT.verify(token, secret) as JWTPayload;
  } catch (error) {
    logger.error(`Error while verifying refresh token: ${error}`);
    throw error;
  }
};

export default verifyRefreshToken;
