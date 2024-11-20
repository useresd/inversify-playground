import { Router } from "express";
import { CustomerService } from "../services/customer.service";
import { TYPES } from "./../ioc/types";
import { plainToClass } from "class-transformer";
import "reflect-metadata";
import { CustomerCreateDto } from "../dto/CustomerCreateDto";

export const router = Router();

/**
 * Route to get a customer by their ID.
 */
router.get("/customers/:id", async (req, res) => {
    
    // Retrieve the CustomerService instance from the Inversify container
    let customerService = req.container.get<CustomerService>(TYPES.CustomerService);

    // Get the customer data using the customerService
    let result = await customerService.getOne(req.params.id);

    // Send the customer data as a JSON response
    res.json(result);
});

/**
 * Handles POST requests to create a new customer.
 */
router.post("/customers", async (req, res) => {
 
    try {
        // Retrieve the CustomerService from the request container
        let customerService = req.container.get<CustomerService>(TYPES.CustomerService);
    
        // Transform the request body to a CustomerCreateDto instance
        let customerDto = plainToClass(CustomerCreateDto, req.body);
    
        // Create a new customer using the service
        let result = await customerService.create(customerDto);
    
        // Send the result as a JSON response
        res.json(result);

    } catch (error: any) {
        res.status(400).json(error)
    }
});
