import { Container } from "inversify";
import { TYPES } from "./types";
import { Logger } from "pino";
import { logger } from "../logger";
import "reflect-metadata";
import { TenantDetails } from "../types/TenantDetails";
import { tenantDetailsProviderFactory } from "./providers/TenantDetailsProvider";

export type TenantDetailsProvider = () => Promise<TenantDetails>

const container = new Container();

container.bind<Logger>(TYPES.Logger).toConstantValue(logger);
container.bind<TenantDetailsProvider>(TYPES.TenantDetailsProvider).toProvider<TenantDetails>(tenantDetailsProviderFactory);

export { container };