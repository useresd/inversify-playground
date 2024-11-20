import { Customer } from "../entities/customer.entity";

export interface ICustomerRepository {
    findById(id: string): Customer
}