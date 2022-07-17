import dotenvSafe from 'dotenv-safe';
import path from 'path';
import fs from 'fs';

const pathEnv = path.join(__dirname, `../../.env`);

if (fs.existsSync(pathEnv)) {
  dotenvSafe.config({
    allowEmptyValues: true,
    path: pathEnv,
    sample: path.join(__dirname, '../../.env.example'),
  });
}
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  secretKey: process.env.JWT_SECRET_KEY,
  log: {
    format: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    dir: '../logs',
  },
  cors: {
    origin: process.env.NODE_ENV === 'production' ? 'domain.com' : 'true',
    credentials: true,
  },
};
