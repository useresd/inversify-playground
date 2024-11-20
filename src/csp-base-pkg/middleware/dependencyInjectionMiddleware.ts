import { container } from "./../ioc/container";
import express from "express";
import { TYPES } from "../ioc/types";
import { UserInfo } from "../types/UserInfo";
import { Logger } from "pino";
import "reflect-metadata";

export function dependencyInjectionMiddleware (req: express.Request, res: express.Response, next: express.NextFunction) {
    req.container = container.createChild();
    req.container.bind<UserInfo>(TYPES.UserInfo).toConstantValue(req.user);
    req.container.bind<Logger>(TYPES.Logger).toConstantValue(req.log);
    next();
}