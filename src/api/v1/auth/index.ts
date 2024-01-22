import { Router } from 'express';

import * as controller from './controller';
import { asyncRouteHandler } from 'middleware/asyncRoute';
import { validationMiddleware } from 'middleware/validation';
import { APP_CONSTANTS } from 'constants/app';
import { LoginRequest } from './dto/LoginRequest';
import { RefreshTokenRequest } from './dto/RefreshTokenRequest';
import { CreateUserRequest } from './dto/CreateUserRequest';

const router = Router();

router.post('/login', validationMiddleware(LoginRequest, APP_CONSTANTS.body), asyncRouteHandler(controller.login));
router.post(
  '/register',
  validationMiddleware(CreateUserRequest, APP_CONSTANTS.body),
  asyncRouteHandler(controller.createUser),
);
router.post(
  '/refresh-token',
  validationMiddleware(RefreshTokenRequest, APP_CONSTANTS.body),
  asyncRouteHandler(controller.handleRefreshToken),
);

export default router;
