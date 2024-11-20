"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependencyInjectionMiddleware = dependencyInjectionMiddleware;
const container_1 = require("./../ioc/container");
const types_1 = require("../ioc/types");
require("reflect-metadata");
function dependencyInjectionMiddleware(req, res, next) {
    req.container = container_1.container.createChild();
    req.container.bind(types_1.TYPES.UserInfo).toConstantValue(req.user);
    req.container.bind(types_1.TYPES.Logger).toConstantValue(req.log);
    next();
}
