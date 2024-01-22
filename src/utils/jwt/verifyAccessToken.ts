import JWT from 'jsonwebtoken';

import config from 'config';
import JWTPayload from 'types/jwt/JWTPayload';
import logger from 'utils/logger/logger';

const verifyAccessToken = (token: string): JWTPayload => {
  try {
    const secret = config.jwt.accessTokenSecret;

    return JWT.verify(token, secret) as JWTPayload;
  } catch (error) {
    logger.error(`Error while verifying access token: ${error}`);
    throw error;
  }
};

export default verifyAccessToken;
