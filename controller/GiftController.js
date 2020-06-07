const { UsersService, GiftService } = require('../services');

module.exports = {
    create: async(req, res) => {
        try {
            const gift = await GiftService.create(req.body);
            res.status(201).send(gift)
        } catch (err) {
            res.status(400).send({ message: 'Error creating gift', err });
        }
    },
    find: async(req, res) => {
        try {
            const gifts = await GiftService.find();
            res.status(200).send(gifts)
        } catch (err) {
            res.status(404).send({ message: 'GiftCard not found', err });
        }
    },
    findById: async(req, res) => {
        const { id } = req.params;
        try {
            const gift = await GiftService.findById(id);
            res.status(200).send(gift)
        } catch (err) {
            res.status(404).send({ message: 'GiftCard not found', err });
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
            const gift = await GiftService.findById(id);
            await GiftService.update(gift, { is_active: false });
            res.status(204).send();
        } catch (err) {
            res.status(404).send({ message: 'Error deleting giftcard', err });
        }
    },
}