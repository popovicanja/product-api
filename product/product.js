const {v1: uuid} = require('uuid');

export class Product {
    constructor(name, price, qty) {
        this.id = uuid();
        this.name = name;
        this.price = price;
        this.quantity = qty;
    }
}

