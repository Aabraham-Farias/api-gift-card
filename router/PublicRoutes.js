const express = require('express');
const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./ProductsRoutes'));
router.use(require('./AddtocarRouter'));

module.exports = router;