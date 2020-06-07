const express = require('express');
const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./ProductsRoutes'));
router.use(require('./AddtocarRouter'));
router.use(require('./AddressesRoutes'));
router.use(require('./PymeRoutes'));
router.use(require('./GiftRoutes'));
router.user(require('./TransferRouter'));

module.exports = router;