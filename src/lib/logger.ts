import { pino } from "pino";

function createLogger(name: string, level: string) {
  return pino({ name, level });
}

export type Logger = pino.Logger;

export default createLogger;
