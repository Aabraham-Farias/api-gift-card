const { UsersService, PymeService } = require('../services');

module.exports = {
    create: async(req, res) => {
        try {
            const pyme = await PymeService.create(req.body);
            res.status(201).send(pyme)
        } catch (err) {
            res.status(400).send({ message: 'Error creating Pyme', err });
        }
    },
    find: async(req, res) => {
        try {
            const Pymes = await PymeService.find();
            res.status(200).send(Pymes)
        } catch (err) {
            res.status(404).send({ message: 'Pymes not found', err });
        }
    },
    findById: async(req, res) => {
        const { id } = req.params;
        try {
            const Pyme = await PymeService.findById(id);
            res.status(200).send(Pyme)
        } catch (err) {
            res.status(404).send({ message: 'Pyme not found', err });
        }
    },
    findByIdAndUpdate: async(req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const book = await BooksService.findById(id);
            const updatedBook = await BooksService.update(book, body);
            res.status(200).send(updatedBook)
        } catch (err) {
            res.status(404).send({ message: 'Pymes not found', err });
        }
    },
    findByIdAndDelete: async(req, res) => {
        const { id } = req.params;
        try {
            const Pyme = await PymeService.findById(id);
            await PymeService.update(Pyme, { is_active: false });
            res.status(204).send();
        } catch (err) {
            res.status(404).send({ message: 'Error deleting Pymes', err });
        }
    },
}