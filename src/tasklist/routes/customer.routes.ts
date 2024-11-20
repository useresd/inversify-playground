import { Router } from "express";
import { CustomerService } from "../services/customer.service";
import { TYPES } from "./../ioc/types";
import "reflect-metadata";

export const router = Router();

/**
 * Route to get a customer by their ID.
 */
router.get("/customers/:id", (req, res) => {
    
    // Retrieve the CustomerService instance from the Inversify container
    let customerService = req.container.get<CustomerService>(TYPES.CustomerService);

    // Get the customer data using the customerService
    let result = customerService.getOne(req.params.id);

    // Send the customer data as a JSON response
    res.json(result);
});
