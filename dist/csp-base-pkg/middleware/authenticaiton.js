"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateMiddleware = authenticateMiddleware;
const faker_1 = require("@faker-js/faker");
function authenticateMiddleware(req, res, next) {
    req.user = {
        id: faker_1.faker.string.uuid(),
        email: faker_1.faker.internet.email(),
        fullName: faker_1.faker.person.fullName(),
        organizationId: faker_1.faker.string.uuid()
    };
    next();
}
