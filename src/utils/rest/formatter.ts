/**
 * Helper functions to standardize responses formats.
 */

import FormatResponsePayload from 'types/formatter/FormatResponsePayload';
import AppResponse from 'types/rest/AppResponse';

/**
 * Utility class for formatting response
 */
export class Formatter {
  /**
   * Function to format response
   */
  public formatResponse<T>(payload: FormatResponsePayload<T>): AppResponse<T> {
    let numRecords: number = 0;
    let errors: Error = null;
    let data: T = null;
    const { result, time, message, total, currentPage, pageSize } = payload;

    const isResultArray = result && Array.isArray(result);
    if (isResultArray) {
      numRecords = result.length;
      data = result;
    } else if (result && result instanceof Error) {
      errors = result;
    } else if (result || result === 0) {
      numRecords = 1;
      data = result;
    }

    const response: AppResponse<T> = {
      data,
      errors,
      message: message,
      meta: {
        length: numRecords,
        took: time,
        currentPage,
        pageSize,
        total: total,
      },
    };

    return response;
  }
}
const formatter = new Formatter();

export default formatter;
