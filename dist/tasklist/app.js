"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../csp-base-pkg/app");
const customer_routes_1 = require("./routes/customer.routes");
const container_1 = require("./ioc/container");
const container_2 = require("./../csp-base-pkg/ioc/container");
require("reflect-metadata");
/**
 * Bind dependencies to the Inversify container.
 * @param container - The Inversify container where dependencies are registered.
 */
(0, container_1.bind)(container_2.container);
/**
 * Start the application with the specified routes.
 * @param routers - An array of routers to be used in the application.
 */
(0, app_1.start)([customer_routes_1.router]);
