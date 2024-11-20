import { TYPES } from "../csp-base-pkg/ioc/types";
import { TYPES as TYPES2 } from "./ioc/types";
import { UserInfo } from "../csp-base-pkg/types/UserInfo";
import { container } from "./../csp-base-pkg/ioc/container";
import { CustomerService } from "./services/customer.service";
import { bind } from "./ioc/container";
import { faker } from "@faker-js/faker/.";

/**
 * Bind the dependencies from the container
 */
bind(container);

/**
 * The message type consumed from ActiveMQ
 */
type Message = {
    body: string,
    userInfo: UserInfo
};

/**
 * Connects to a queue and processes a message.
 * 
 * @param message - The message object containing the body and userInfo.
 * @param message.body - The body of the message.
 * @param message.userInfo - The user information related to the message.
 */
function connectToQueue(message: Message) {

    // Create a child container to manage request-specific bindings
    const myContainer = container.createChild();
    myContainer.bind<UserInfo>(TYPES.UserInfo).toConstantValue(message.userInfo);
    
    // Retrieve the CustomerService from the child container
    const customerService = myContainer.get<CustomerService>(TYPES2.CustomerService);

    // Log the result of the getOne method of CustomerService
    console.log(customerService.getOne("123"));
}

// Example usage of the connectToQueue function
connectToQueue({
    body: "Hello, World", 
    userInfo: { id: "1", fullName: "John Doe", email: "john@doe.com", organizationId: faker.string.uuid() }
});
