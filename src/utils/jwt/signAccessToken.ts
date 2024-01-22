import JWT from 'jsonwebtoken';

import config from 'config';
import JWTPayload from 'types/jwt/JWTPayload';
import logger from 'utils/logger/logger';

const signAccessToken = (payload: JWTPayload) => {
  try {
    const secret = config.jwt.accessTokenSecret;

    const options = {
      expiresIn: config.jwt.accessTokenExpiresIn,
    };

    return JWT.sign(payload, secret, options);
  } catch (error) {
    logger.error(`Error while signing access token: ${error}`);
  }
};

export default signAccessToken;
