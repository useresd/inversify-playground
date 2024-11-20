"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = bind;
const customer_repository_1 = require("../repositories/customer.repository");
const customer_service_1 = require("../services/customer.service");
const types_1 = require("./types");
function bind(container) {
    container.bind(types_1.TYPES.CustomerRepository).to(customer_repository_1.CustomerRepository);
    container.bind(types_1.TYPES.CustomerService).to(customer_service_1.CustomerService);
}
