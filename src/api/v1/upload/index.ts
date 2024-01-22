import { Router } from 'express';
import multer from 'multer';
import * as fs from 'fs';

import * as controller from './controller';
import { asyncRouteHandler } from 'middleware/asyncRoute';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = './public/images';
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });
const router = Router();

router.post('/', upload.single('file'), asyncRouteHandler(controller.uploadFile));

export default router;
