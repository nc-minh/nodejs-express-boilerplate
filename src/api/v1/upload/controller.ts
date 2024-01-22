import { Response as ExpressResponse } from 'express';

import fmt from 'utils/rest/formatter';
import AppRequest from 'types/rest/AppRequest';
import * as service from './service';

export const uploadFile = async (request: AppRequest, response: ExpressResponse) => {
  const file = request.file;
  const result = await service.uploadFile(file);

  response.send(
    fmt.formatResponse({
      result,
      time: Date.now() - request.startTime,
      message: 'OK',
    }),
  );
};
