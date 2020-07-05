const express = require('express');
const cors = require('cors');
import { Product } from './product/product.js';

const app = express();
const port = 3000;

app.use(cors());

const products = [
    new Product('First Product', 155.34, 1),
    new Product('Second Product', 17.20, 1),
    new Product('Third Product', 79.5, 1),
    new Product('Fourth Product', 22.15, 1),
    new Product('Fifth Product', 2.5, 1)
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
