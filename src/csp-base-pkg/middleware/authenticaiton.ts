import express from "express";
import { faker } from "@faker-js/faker";

export function authenticateMiddleware (req: express.Request, res: express.Response, next: express.NextFunction) {
    req.user = {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        fullName: faker.person.fullName()
    }
    next();
}