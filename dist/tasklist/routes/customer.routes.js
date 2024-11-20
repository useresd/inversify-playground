"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const types_1 = require("./../ioc/types");
require("reflect-metadata");
exports.router = (0, express_1.Router)();
/**
 * Route to get a customer by their ID.
 */
exports.router.get("/customers/:id", (req, res) => {
    // Retrieve the CustomerService instance from the Inversify container
    let customerService = req.container.get(types_1.TYPES.CustomerService);
    // Get the customer data using the customerService
    let result = customerService.getOne(req.params.id);
    // Send the customer data as a JSON response
    res.json(result);
});
