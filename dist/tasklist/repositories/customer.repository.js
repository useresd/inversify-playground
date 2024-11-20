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
exports.CustomerRepository = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./../../csp-base-pkg/ioc/types");
const customer_entity_1 = require("./../entities/customer.entity");
const faker_1 = require("@faker-js/faker");
/**
 * Repository class for managing customer data.
 * Implements the ICustomerRepository interface.
 */
let CustomerRepository = class CustomerRepository {
    /**
     * Creates an instance of CustomerRepository.
     * @param logger - The Logger service used for logging.
     * @param userInfo - The UserInfo object containing details about the current user.
     */
    constructor(logger, userInfo) {
        this.logger = logger;
        this.userInfo = userInfo;
    }
    /**
     * Finds a customer by their ID.
     * Logs the action and user details.
     * Generates a fake customer with the given ID.
     *
     * @param id - The ID of the customer to find.
     * @returns The Customer object with the specified ID.
     */
    findById(id) {
        this.logger.warn("using logger inside repository");
        this.logger.warn(`current user is: ${this.userInfo.email}`);
        let customer = new customer_entity_1.Customer()
            .setId(id)
            .setName(faker_1.faker.person.fullName())
            .setAddress(faker_1.faker.location.streetAddress());
        return customer;
    }
};
exports.CustomerRepository = CustomerRepository;
exports.CustomerRepository = CustomerRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Logger)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.UserInfo)),
    __metadata("design:paramtypes", [Object, Object])
], CustomerRepository);