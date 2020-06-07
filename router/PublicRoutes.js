const express = require('express');
<<<<<<< HEAD

=======
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./ProductsRoutes'));
router.use(require('./AddtocarRouter'));
<<<<<<< HEAD
router.use(require('./AddressesRoutes'));

module.exports = router;
=======
router.use(require('./TransferRouter'));
router.use(require('./GiftRoutes'));
router.use(require('./PymeRoutes'));

module.exports = router;
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
