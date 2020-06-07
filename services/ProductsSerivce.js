const { Products } = require('../models/Products');

module.exports = {
    create: (body) => {
        const newProduct = new Products(body);
        return newProduct.save();
    },
    find: () => Products.find(),
    findById: (id) => Products.findById(id),
    update: (product, body) => {
        Object.assign(product, body);
        return product.save();
    },
};