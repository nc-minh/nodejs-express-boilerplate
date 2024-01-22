import MetaData from './MetaData';

/**
 * Standard API response object
 */
export default interface AppResponse<T> {
  data?: T;
  meta?: MetaData;
  errors?: Error;
  message?: string;
}
