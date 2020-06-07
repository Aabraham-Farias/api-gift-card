const { Products } = require('../models/Products');

module.exports = {
<<<<<<< HEAD
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
=======
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
}
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
