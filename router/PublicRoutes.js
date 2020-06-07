const express = require('express');

const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./ProductsRoutes'));
router.use(require('./AddtocarRouter'));
router.use(require('./AddressesRoutes'));

module.exports = router;
