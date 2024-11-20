import { Container } from "inversify";
import { TYPES } from "./types";
import { Logger } from "pino";
import { logger } from "../logger";
import "reflect-metadata";
import { TenantDetails } from "../types/TenantDetails";
import { tenantDetailsProviderFactory } from "./providers/TenantDetailsProvider";
import { License } from "../license/license.interface";
import { BasicLicense } from "../license/BasicLicense";
import { AdvancedLicense } from "../license/AdvancedLicense";

export type TenantDetailsProvider = () => Promise<TenantDetails>

const container = new Container();

container.bind<Logger>(TYPES.Logger).toConstantValue(logger);

container.bind<TenantDetailsProvider>(TYPES.TenantDetailsProvider).toProvider<TenantDetails>(tenantDetailsProviderFactory);

// Multi bindings
container.bind<License>(TYPES.License).to(BasicLicense).whenTargetIsDefault();
container.bind<License>(TYPES.License).to(BasicLicense).whenTargetNamed("basic");
container.bind<License>(TYPES.License).to(AdvancedLicense).whenTargetNamed("advanced");

export { container };