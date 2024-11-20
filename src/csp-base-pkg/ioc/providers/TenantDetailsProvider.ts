import { interfaces } from "inversify";
import { TenantDetails } from "../../types/TenantDetails";
import { UserInfo } from "../../types/UserInfo";
import { TYPES } from "../types";
import { faker } from "@faker-js/faker";

export const tenantDetailsProviderFactory = (context: interfaces.Context): interfaces.Provider<TenantDetails> => {
    return () => {
        const userInfo = context.container.get<UserInfo>(TYPES.UserInfo);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    id: userInfo.organizationId,
                    name: faker.company.name()
                })
            }, 300);
        });
    };
};