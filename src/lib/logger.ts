import { DestinationStream, LoggerOptions, pino } from "pino";

/**
 * Creates an instance of `pino.Logger`.
 */
function createLogger(
  options: LoggerOptions & { name: string; level: string },
  destinationStream?: DestinationStream,
) {
  return destinationStream ? pino(options, destinationStream) : pino(options);
}

export type Logger = pino.Logger;

export default createLogger;
