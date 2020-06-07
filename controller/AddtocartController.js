<<<<<<< HEAD
/* eslint-disable no-console */
=======
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const { UsersService, ProductsService } = require('../services');

module.exports = {

<<<<<<< HEAD
  addcartoUser: async (req, res) => {
    const { id } = req.params;
    const { idProduct } = req.body;
    try {
      const user = await UsersService.findById(id);
      console.log(`obteniendo usuario${user}`);
      const get = user.cart;
      console.log(`obtuve cart ${get}`);
      const product = await ProductsService.findById(idProduct);
      if (!product) res.status(404).send({ message: 'Product not found' });
      console.log(`Vas por buen camino ${product}`);
      const getIdProduct = await UsersService.findProduct(user, product);
      console.log(`get id del producto ${getIdProduct}`);
      const userAddCart = await UsersService.addCart(user, product);
      res.status(201).send(userAddCart.populate('Products'));
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'Error adding product to user', error });
    }
  },
  deleteProductByid: async (req, res) => {
    const { idUser, idProduct } = req.params;
    try {
      const user = await UsersService.findById(idUser);
      const product = await ProductsService.findById(idProduct);
      if (!product) res.status(404).send({ message: 'Product not found' });
      const getIdProduct = await UsersService.findProduct(user, product);
      console.log(`get id del producto ${getIdProduct}`);
      if (!getIdProduct) res.status(404).send({ message: 'User deleted the product' });
      await UsersService.deleteProducttoUser(user, product);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'Error deleting user book', error });
    }
  },
};
=======
    addcartoUser: async(req, res) => {
        const { id } = req.params;
        const { idProduct } = req.body;
        try {
            const user = await UsersService.findById(id);
            console.log(`obteniendo usuario${user}`);
            const get = user.cart;
            console.log(`obtuve cart ${get}`);
            const product = await ProductsService.findById(idProduct);
            if (!product) res.status(404).send({ message: "Product not found" });
            console.log(`Vas por buen camino ${product}`);
            const getIdProduct = await UsersService.findProduct(user, product);
            console.log(`get id del producto ${getIdProduct}`);
            const userAddCart = await UsersService.addCart(user, product);
            res.status(201).send(userAddCart.populate('Products'));
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: 'Error adding product to user', error });
        }
    },
    deleteProductByid: async(req, res) => {
        const { idUser, idProduct } = req.params;
        try {
            const user = await UsersService.findById(idUser);
            const product = await ProductsService.findById(idProduct);
            if (!product) res.status(404).send({ message: "Product not found" });
            const getIdProduct = await UsersService.findProduct(user, product);
            console.log(`get id del producto ${getIdProduct}`);
            if (!getIdProduct) res.status(404).send({ message: 'User deleted the product' });
            await UsersService.deleteProducttoUser(user, product);
            res.status(204).send();

        } catch (error) {
            console.log(error);
            res.status(400).send({ message: 'Error deleting user book', error });
        }
    },
}
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
