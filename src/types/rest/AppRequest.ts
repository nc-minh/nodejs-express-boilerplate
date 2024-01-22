import { Request as ExpressRequest } from 'express';
import JWTPayload from 'types/jwt/JWTPayload';
import URLParams from 'types/rest/URLParams';

/**
 * Interface to add extra modifiers to request.
 */
export default interface AppRequest extends ExpressRequest {
  user?: JWTPayload;
  startTime?: number;
  searchParams?: URLParams;
  appName: string;
  params: {
    id: string;
  };
  query: {
    category_id: string;
    foods_id: string;
  };
}
