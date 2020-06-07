/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const Users = require('../models/Users');

module.exports = {
    create: (body) => {
        const newUser = new Users(body);
        return newUser.save();
    },
    find: () => Users.find({ is_active: true }),
    findById: (id) => Users.findById(id),
    findByEmail: (email) => Users.findOne({ email }),
    update: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
    comparePasswords: (candidatePassword, password) => bcrypt.compareSync(candidatePassword, password),
    addRole: (user, role) => {
        user.roles.push(role);
        return user.save();
    },
    updateRole: (user, updatedRole) => {
        const updatedRoles = user.roles.filter((rol) => {
            if (rol._id === updatedRole._id) {
                return updatedRole;
            }
        });
        user.roles = updatedRoles;
        return user.save();
    },
    addBook: (user, book) => {
        user.books.push(book._id);
        return user.save();
    },
    findProduct: (user, product) => {
        const idProduct = product._id;
        const getcart = user.cart;
        console.log('✅', user);
        console.log('✅', getcart);
        console.log(`id del product:${idProduct}`);
        return idProduct;
    },
    deleteBook: (user, bookToDelete) => {
        const newUserBooks = user.books.filter((id) => {
            console.log('🦷', id, bookToDelete._id);
            if (id.toString() !== bookToDelete._id.toString()) return id;
        });
        user.books = newUserBooks;
        return user.save();
    },
    addCart: (user, product) => {
        user.cart.push(product.id);
        return user.save();
    },
    deleteProducttoUser: (user, productToDelete) => {
        const newUserProducts = user.cart.filter((id) => {
            console.log('🦷', id, productToDelete._id);
            if (id.toString() !== productToDelete._id.toString()) return id;
        });
        console.log(`viendo que es: ${newUserProducts}`);
        user.cart = newUserProducts;
        return user.save();
    },
};