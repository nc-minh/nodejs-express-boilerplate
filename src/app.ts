import express, { Response as ExpressResponse, NextFunction } from 'express';
import helmet from 'helmet';
import noCache from 'nocache';
import compression from 'compression';

import config from 'config';
import routers from 'api';
import { APP_CONSTANTS } from 'constants/app';
import AppRequest from 'types/rest/AppRequest';
import URLParams from 'types/rest/URLParams';
import { errorMiddleware } from 'middleware/errorMiddleware';
import initializeResources from 'resources';

const app = express();

app.use('/public', express.static('public'));

/**
 * Initializes the security middleware for the application.
 * This function adds various security middleware to enhance the security of the application.
 * It includes middleware for preventing caching, setting frameguard, hiding powered by header,
 * enabling HTTP Strict Transport Security (HSTS), preventing IE from executing downloads in the
 * context of the site, preventing browsers from sniffing MIME types, and enabling XSS filter.
 */
function initializeSecurity() {
  app.use(noCache());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
}

/**
 * Initializes the middlewares for the application.
 */
function initializeMiddlewares() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    compression({
      level: 6,
      threshold: 100 * 1024,
    }),
  );

  // use for computing processing time on response
  app.use((request: AppRequest, _response: ExpressResponse, next: NextFunction) => {
    request.startTime = Date.now();
    request.searchParams = request.query as URLParams;
    return next();
  });
}

function initializeErrorHandler() {
  app.use(errorMiddleware);
}

initializeSecurity();
initializeMiddlewares();
app.use(APP_CONSTANTS.apiPrefix, routers);
initializeErrorHandler();

export const listen = async () => {
  await initializeResources();
  app.listen(config.port, () => console.log(`🚀 Server running on port http://localhost:${config.port}`));
};

export default app;
