const { UsersService, TransferService } = require('../services');

module.exports = {
    create: async(req, res) => {
        try {
            const transfer = await TransferService.create(req.body);
            res.status(201).send(transfer)
        } catch (err) {
            res.status(400).send({ message: 'Error creating transfer', err });
        }
    },
    find: async(req, res) => {
        try {
            const transfers = await TransferService.find();
            res.status(200).send(transfers)
        } catch (err) {
            res.status(404).send({ message: 'Transfer not found', err });
        }
    },
    findById: async(req, res) => {
        const { id } = req.params;
        try {
            const transfer = await TransferService.findById(id);
            res.status(200).send(transfer)
        } catch (err) {
            res.status(404).send({ message: 'transfer not found', err });
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
            res.status(404).send({ message: 'transfer not found', err });
        }
    },
    findByIdAndDelete: async(req, res) => {
        const { id } = req.params;
        try {
            const transfer = await TransferService.findById(id);
            await TransferService.update(transfer, { is_active: false });
            res.status(204).send();
        } catch (err) {
            res.status(404).send({ message: 'Error deleting transfer', err });
        }
    },
}