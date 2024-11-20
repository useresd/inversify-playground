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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const inversify_1 = require("inversify");
const customer_entity_1 = require("../entities/customer.entity");
const types_1 = require("./../ioc/types");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const faker_1 = require("@faker-js/faker");
const types_2 = require("./../../csp-base-pkg/ioc/types");
/**
 * Service class for managing customer operations.
 */
let CustomerService = class CustomerService {
    /**
     * Creates an instance of CustomerService.
     * @param customerRepository - The repository to manage customer data.
     */
    constructor(customerRepository, logger) {
        this.customerRepository = customerRepository;
        this.logger = logger;
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
    /**
     * Creates a new Customer entity from a CustomerCreateDto.
     *
     * @param customerCreateDto - The DTO with customer information.
     * @returns The newly created Customer entity.
     */
    create(customerCreateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("creating a new customer. logged from service class");
            // validate the customer create dto
            yield (0, class_validator_1.validateOrReject)(customerCreateDto);
            // Convert the customerDto to a customer class
            let customer = (0, class_transformer_1.plainToClass)(customer_entity_1.Customer, customerCreateDto);
            // Example business logic, set id to the customer.
            customer.setId(faker_1.faker.string.uuid());
            // Use customer repository to create a customer
            return this.customerRepository.create(customer);
        });
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.CustomerRepository)),
    __param(1, (0, inversify_1.inject)(types_2.TYPES.Logger)),
    __metadata("design:paramtypes", [Object, Object])
], CustomerService);
