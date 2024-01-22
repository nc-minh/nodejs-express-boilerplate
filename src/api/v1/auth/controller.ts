import { Response as ExpressResponse } from 'express';

import fmt from 'utils/rest/formatter';
import AppRequest from 'types/rest/AppRequest';
import * as service from './service';
import { LoginRequest } from './dto/LoginRequest';
import { RefreshTokenRequest } from './dto/RefreshTokenRequest';
import { CreateUserRequest } from './dto/CreateUserRequest';

export const login = async (request: AppRequest, response: ExpressResponse) => {
  const input: LoginRequest = request.body;

  const result = await service.login(input);

  response.send(
    fmt.formatResponse({
      result,
      time: Date.now() - request.startTime,
      message: 'OK',
    }),
  );
};

export const createUser = async (request: AppRequest, response: ExpressResponse) => {
  const input: CreateUserRequest = request.body;

  const result = await service.createUser(input);

  response.send(
    fmt.formatResponse({
      result,
      time: Date.now() - request.startTime,
      message: 'OK',
    }),
  );
};

export const handleRefreshToken = async (request: AppRequest, response: ExpressResponse) => {
  const input: RefreshTokenRequest = request.body;

  const result = await service.handleRefreshToken(input);

  response.send(
    fmt.formatResponse({
      result,
      time: Date.now() - request.startTime,
      message: 'OK',
    }),
  );
};
