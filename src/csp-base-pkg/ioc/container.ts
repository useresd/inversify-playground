import { Container } from "inversify";
import { TYPES } from "./types";
import { Logger } from "pino";
import { logger } from "../logger";
import "reflect-metadata";
import { TenantDetails } from "../types/TenantDetails";
import { faker } from "@faker-js/faker";
import { UserInfo } from "../types/UserInfo";

const container = new Container();

export type TenantDetailsProvider = () => Promise<TenantDetails>

container.bind<Logger>(TYPES.Logger).toConstantValue(logger);
container.bind<TenantDetailsProvider>(TYPES.TenantDetailsProvider).toProvider<TenantDetails>((context) => {
    return () => {
        return new Promise(resolve => {
            setTimeout(() => {
                let userInfo = context.container.get<UserInfo>(TYPES.UserInfo);
                resolve({
                    id: userInfo.organizationId,
                    name: faker.company.name()
                })
            }, 2000);
        });
    }
})

export { container };