"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./types");
const logger_1 = require("../logger");
require("reflect-metadata");
const faker_1 = require("@faker-js/faker");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.Logger).toConstantValue(logger_1.logger);
container.bind(types_1.TYPES.TenantDetailsProvider).toProvider((context) => {
    return () => {
        return new Promise(resolve => {
            setTimeout(() => {
                let userInfo = context.container.get(types_1.TYPES.UserInfo);
                resolve({
                    id: userInfo.organizationId,
                    name: faker_1.faker.company.name()
                });
            }, 2000);
        });
    };
});
