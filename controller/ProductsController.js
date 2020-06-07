/* eslint-disable no-console */
const { ProductsService } = require('../services');
const utils = require('../utils');

module.exports = {
  create: async (req, res) => {
    try {
      const product = await ProductsService.create(req.body);
      res.status(201).send(product);
    } catch (err) {
      res.status(400).send({ message: 'Error creating products', err });
    }
  },
  find: async (req, res) => {
    try {
      const products = await ProductsService.find();
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send({ message: 'Product not found', err });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductsService.findById(id);
      res.status(200).send(product);
    } catch (err) {
      res.status(404).send({ message: 'Product not found', err });
    }
  },
  findByIdAndUpdate: async (req, res) => {
    if (req.files) {
      const { photo } = req.files;
      console.log('🌞', photo);
      const upload = await utils.uploadFile(photo.tempFilePath);
      if (upload) req.body.img = upload.url;
    }
    const { id } = req.params;
    const { body } = req;
    try {
      const product = await ProductsService.findById(id);
      const ProductInfo = await ProductsService.update(product, body);
      res.status(200).send(ProductInfo);
    } catch (err) {
      res.status(404).send({ message: 'Product not found', err });
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductsService.findById(id);
      await ProductsService.update(product, { is_active: false });
      res.status(204).send();
    } catch (err) {
      res.status(404).send({ message: 'Errorr deleting product', err });
    }
  },

};
