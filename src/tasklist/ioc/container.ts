import { Container } from "inversify";
import { CustomerRepository } from "../repositories/customer.repository";
import { ICustomerRepository } from "../repositories/customer.repository.interface";
import { CustomerService } from "../services/customer.service";
import { TYPES } from "./types";

export function bind(container: Container) {
    container.bind<ICustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);
    container.bind<CustomerService>(TYPES.CustomerService).to(CustomerService);
}