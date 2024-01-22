import UserModel from 'models/schemas/User';
import { ERROR_CODES } from 'exceptions/errorCode';
import { LoginRequest } from './dto/LoginRequest';
import verifyHashPassword from 'utils/bcrypt/verifyHashPassword';
import LoginException from 'exceptions/LoginException';
import UserNotFoundException from 'exceptions/UserNotFoundException';
import hideHashPassword from 'utils/user/hideHashPassword';
import DuplicateUserException from 'exceptions/DuplicateUserException';
import BadRequestException from 'exceptions/BadRequestException';
import JWTPayload from 'types/jwt/JWTPayload';
import signAccessToken from 'utils/jwt/signAccessToken';
import signRefreshToken from 'utils/jwt/signRefreshToken';
import { RefreshTokenRequest } from './dto/RefreshTokenRequest';
import verifyRefreshToken from 'utils/jwt/verifyRefreshToken';
import JWTException from 'exceptions/JWTException';
import JWTRefreshTokenExpiredException from 'exceptions/JWTRefreshTokenExpiredException';
import { CreateUserRequest } from './dto/CreateUserRequest';

export const login = async (input: LoginRequest) => {
  try {
    const user = await UserModel.findOne({ username: input.username });

    if (!user) {
      return new UserNotFoundException();
    }

    const isOk = await verifyHashPassword(input.password, user.password);

    if (!isOk) {
      return new LoginException();
    }

    const jwtPayload: JWTPayload = {
      _id: user._id,
      username: user.username,
    };

    const accessToken = signAccessToken(jwtPayload);
    const refreshToken = signRefreshToken(jwtPayload);

    return {
      user: hideHashPassword(user),
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw new BadRequestException();
  }
};

export const createUser = async (input: CreateUserRequest) => {
  try {
    const user = await UserModel.create(input);

    const jwtPayload: JWTPayload = {
      _id: user._id,
      username: user.username,
    };

    const accessToken = signAccessToken(jwtPayload);
    const refreshToken = signRefreshToken(jwtPayload);

    return {
      user: hideHashPassword(user),
      accessToken,
      refreshToken,
    };
  } catch (error) {
    if (error?.code === ERROR_CODES.MONGODB_DUPLICATED_CODE) {
      throw new DuplicateUserException();
    }

    throw new BadRequestException();
  }
};

export const handleRefreshToken = async function (input: RefreshTokenRequest) {
  try {
    const res = verifyRefreshToken(input?.refresh_token);

    const user = await UserModel.findById({ _id: res._id });

    const jwtPayload: JWTPayload = {
      _id: user._id,
      username: user.username,
    };

    const accessToken = signAccessToken(jwtPayload);
    const refreshToken = signRefreshToken(jwtPayload);

    return {
      user: hideHashPassword(user),
      accessToken,
      refreshToken,
    };
  } catch (error) {
    if (error.message === 'invalid signature' || error.message === 'jwt malformed') throw new JWTException();

    if (error.message === 'jwt expired') throw new JWTRefreshTokenExpiredException();

    throw new BadRequestException();
  }
};
