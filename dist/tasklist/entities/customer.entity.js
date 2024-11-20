"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
}
exports.Customer = Customer;
