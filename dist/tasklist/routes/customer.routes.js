"use strict";
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
exports.router = void 0;
const express_1 = require("express");
const types_1 = require("./../ioc/types");
const class_transformer_1 = require("class-transformer");
require("reflect-metadata");
const CustomerCreateDto_1 = require("../dto/CustomerCreateDto");
exports.router = (0, express_1.Router)();
/**
 * Route to get a customer by their ID.
 */
exports.router.get("/customers/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve the CustomerService instance from the Inversify container
    let customerService = req.container.get(types_1.TYPES.CustomerService);
    // Get the customer data using the customerService
    let result = yield customerService.getOne(req.params.id);
    // Send the customer data as a JSON response
    res.json(result);
}));
/**
 * Handles POST requests to create a new customer.
 */
exports.router.post("/customers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Retrieve the CustomerService from the request container
        let customerService = req.container.get(types_1.TYPES.CustomerService);
        // Transform the request body to a CustomerCreateDto instance
        let customerDto = (0, class_transformer_1.plainToClass)(CustomerCreateDto_1.CustomerCreateDto, req.body);
        // Create a new customer using the service
        let result = yield customerService.create(customerDto);
        // Send the result as a JSON response
        res.json(result);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
