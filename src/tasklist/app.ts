import { start } from "./../csp-base-pkg/app";
import { router } from "./routes/customer.routes";
import { bind } from "./ioc/container";
import { container } from "./../csp-base-pkg/ioc/container";

import "reflect-metadata";

/**
 * Bind dependencies to the Inversify container.
 * @param container - The Inversify container where dependencies are registered.
 */
bind(container);

/**
 * Start the application with the specified routes.
 * @param routers - An array of routers to be used in the application.
 */
start([router]);
