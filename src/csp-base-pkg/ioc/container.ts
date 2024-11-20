import { Container } from "inversify";
import { TYPES } from "./types";
import { Logger } from "pino";
import { logger } from "../logger";
import "reflect-metadata";

const container = new Container();

container.bind<Logger>(TYPES.Logger).toConstantValue(logger);

export { container };