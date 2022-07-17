import config from '@/configs';
const url = config.mongoUrl;

const options = {
  autoIndex: true,
  autoCreate: true,
};

export const dbConnection = {
  url,
  options,
};
