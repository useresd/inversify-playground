export class Customer {

    private id!: string;
    private name!: string;
    private address!: string;

    getId(): string {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string) {
        this.address = address;
        return this;
    }

}