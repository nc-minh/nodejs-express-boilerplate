import fmt from 'utils/rest/formatter';
import { Response as ExpressResponse } from 'express';
import AppRequest from 'types/rest/AppRequest';

const checkHealth = (request: AppRequest, response: ExpressResponse) => {
  const data = { message: 'Service Up' };
  response.status(200);
  response.send(
    fmt.formatResponse({
      result: data,
      time: Date.now() - request.startTime,
      message: 'OK',
    }),
  );
};

export { checkHealth };
