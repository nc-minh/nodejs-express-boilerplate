import { Router } from 'express';
import { checkHealth } from './controller';
import { asyncRouteHandler } from 'middleware/asyncRoute';

const router = Router();

router.get('/', asyncRouteHandler(checkHealth));

export default router;
