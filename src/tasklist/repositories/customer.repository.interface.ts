import { CustomerCreateDto } from "../dto/CustomerCreateDto";
import { Customer } from "../entities/customer.entity";

export interface ICustomerRepository {
    findById(id: string): Promise<Customer>;
    create(customer: Customer): Customer;
}