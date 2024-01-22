import JWT from 'jsonwebtoken';

import config from 'config';
import JWTPayload from 'types/jwt/JWTPayload';
import logger from 'utils/logger/logger';

const signRefreshToken = (payload: JWTPayload) => {
  try {
    const secret = config.jwt.refreshTokenSecret;

    const options = {
      expiresIn: config.jwt.refreshTokenExpiresIn,
    };

    return JWT.sign(payload, secret, options);
  } catch (error) {
    logger.error(`Error while signing refresh token: ${error}`);
  }
};

export default signRefreshToken;
