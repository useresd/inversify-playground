import { injectable, inject, named } from "inversify";
import { ICustomerRepository } from "../repositories/customer.repository.interface";
import { Customer } from "../entities/customer.entity";
import { TYPES } from "./../ioc/types";
import "reflect-metadata";
import { CustomerCreateDto } from "../dto/CustomerCreateDto";
import { validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";
import { faker } from "@faker-js/faker";
import { TYPES as TOKENS } from "./../../csp-base-pkg/ioc/types";
import { Logger } from "pino";
import { License } from "../../csp-base-pkg/license/license.interface";

/**
 * Service class for managing customer operations.
 */
@injectable()
export class CustomerService {

    /**
     * Creates an instance of CustomerService.
     * @param customerRepository - The repository to manage customer data.
     */
    constructor(
        @inject(TYPES.CustomerRepository) private customerRepository: ICustomerRepository,
    ) {}

    /**
     * Retrieves a customer by their ID.
     * 
     * @param id - The ID of the customer to retrieve.
     * @returns The Customer object with the specified ID.
     */
    getOne(id: string): Promise<Customer> {
        return this.customerRepository.findById(id);
    }

    /**
     * Creates a new Customer entity from a CustomerCreateDto.
     * 
     * @param customerCreateDto - The DTO with customer information.
     * @returns The newly created Customer entity.
     */
    async create(customerCreateDto: CustomerCreateDto) {

        // validate the customer create dto
        await validateOrReject(customerCreateDto);

        // Convert the customerDto to a customer class
        let customer = plainToClass(Customer, customerCreateDto);
        
        // Example business logic, set id to the customer.
        customer.setId(faker.string.uuid());

        // Use customer repository to create a customer
        return this.customerRepository.create(customer);
    }


}
