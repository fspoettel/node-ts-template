/* c8 ignore start */
import { DestinationStream, LoggerOptions, pino } from "pino";

/**
 * Creates an instance of `pino.Logger`.
 */
function makeLogger(
  options: LoggerOptions & { name: string; level: string },
  destinationStream?: DestinationStream,
) {
  return destinationStream ? pino(options, destinationStream) : pino(options);
}

export type Logger = pino.Logger;

export default makeLogger;
/* c8 ignore stop */
