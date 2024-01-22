import winston from 'winston';

const { createLogger, format } = winston;
const { combine, colorize, printf } = format;

// Define log format
const logFormat = printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

const developmentFormat = () => {
  return combine(colorize(), logFormat);
};

const productionFormat = () => {
  const replaceError = ({ label, level, message, stack }: any) => ({
    label,
    level,
    message,
    stack,
  });

  const replacer = (key: string, value: any) => (value instanceof Error ? replaceError(value) : value);

  return combine(format.json({ replacer }));
};

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = createLogger({
  format: combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    process.env.NODE_ENV === 'production' ? productionFormat() : developmentFormat(),
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
