import { Router } from 'express';

import authRouter from './auth';
import uploadRouter from './upload';

const router = Router();

router.use('/auth', authRouter);
router.use('/upload', uploadRouter);

export default router;
