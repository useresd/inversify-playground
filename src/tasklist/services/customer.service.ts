import { injectable, inject } from "inversify";
import { ICustomerRepository } from "../repositories/customer.repository.interface";
import { Customer } from "../entities/customer.entity";
import { TYPES } from "./../ioc/types";
import "reflect-metadata";

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
        @inject(TYPES.CustomerRepository) private customerRepository: ICustomerRepository
    ) {}

    /**
     * Retrieves a customer by their ID.
     * 
     * @param id - The ID of the customer to retrieve.
     * @returns The Customer object with the specified ID.
     */
    getOne(id: string): Customer {
        return this.customerRepository.findById(id);
    }

}
