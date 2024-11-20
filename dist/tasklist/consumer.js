"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../csp-base-pkg/ioc/types");
const types_2 = require("./ioc/types");
const container_1 = require("./../csp-base-pkg/ioc/container");
const container_2 = require("./ioc/container");
(0, container_2.bind)(container_1.container);
/**
 * Connects to a queue and processes a message.
 *
 * @param message - The message object containing the body and userInfo.
 * @param message.body - The body of the message.
 * @param message.userInfo - The user information related to the message.
 *
 * @example
 * connectToQueue({
 *   body: "Hello, World",
 *   userInfo: {id: "1", fullName: "John Doe", email: "john@doe.com"}
 * });
 */
function connectToQueue(message) {
    // Create a child container to manage request-specific bindings
    const myContainer = container_1.container.createChild();
    // Bind the UserInfo object to the child container
    myContainer.bind(types_1.TYPES.UserInfo).toConstantValue(message.userInfo);
    // Retrieve the CustomerService from the child container
    const customerService = myContainer.get(types_2.TYPES.CustomerService);
    // Log the result of the getOne method of CustomerService
    console.log(customerService.getOne("123"));
}
// Example usage of the connectToQueue function
connectToQueue({
    body: "Hello, World",
    userInfo: { id: "1", fullName: "John Doe", email: "john@doe.com" }
});
