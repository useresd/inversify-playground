import { injectable, inject } from "inversify";
import { Logger } from "pino";
import { UserInfo } from "./../../csp-base-pkg/types/UserInfo";
import { TYPES } from "./../../csp-base-pkg/ioc/types";
import { TYPES as TOKENS } from "./../../csp-base-pkg/ioc/types";
import { ICustomerRepository } from "./customer.repository.interface";
import { Customer } from "./../entities/customer.entity";
import { faker } from "@faker-js/faker";
import { TenantDetailsProvider } from "../../csp-base-pkg/ioc/container";
/**
 * Repository class for managing customer data.
 * Implements the ICustomerRepository interface.
 */
@injectable()
export class CustomerRepository implements ICustomerRepository {

    /**
     * Creates an instance of CustomerRepository.
     * @param logger - The Logger service used for logging.
     * @param userInfo - The UserInfo object containing details about the current user.
     */
    constructor(
        @inject(TYPES.Logger) private logger: Logger,
        @inject(TYPES.UserInfo) private userInfo: UserInfo,
    ) {}

    /**
     * Finds a customer by their ID.
     * Logs the action and user details.
     * Generates a fake customer with the given ID.
     * 
     * @param id - The ID of the customer to find.
     * @returns The Customer object with the specified ID.
     */
    async findById(id: string): Promise<Customer> {

        this.logger.warn(`finding a customer by id with user ${this.userInfo.email}`);


        let customer = new Customer()
            .setId(id)
            .setName(faker.person.fullName())
            .setAddress(faker.location.streetAddress());

        return customer;
    }

    /**
     * Creates a new Customer entity from a CustomerCreateDto.
     * 
     * @param customerDto - The DTO with customer information.
     * @returns The newly created Customer entity.
     */
    create(customer: Customer): Customer {
        this.logger.info(`creating customer in the repository with user ${this.userInfo.email}`);
        return customer;
    }
    

}
