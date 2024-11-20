"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./../ioc/types");
require("reflect-metadata");
/**
 * Service class for managing customer operations.
 */
let CustomerService = class CustomerService {
    /**
     * Creates an instance of CustomerService.
     * @param customerRepository - The repository to manage customer data.
     */
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    /**
     * Retrieves a customer by their ID.
     *
     * @param id - The ID of the customer to retrieve.
     * @returns The Customer object with the specified ID.
     */
    getOne(id) {
        return this.customerRepository.findById(id);
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.CustomerRepository)),
    __metadata("design:paramtypes", [Object])
], CustomerService);
