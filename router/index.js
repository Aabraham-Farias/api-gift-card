<<<<<<< HEAD
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

=======
const express = require('express');
const router = express.Router();
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const { verifyToken } = require('../middlewares');

router.use(require('./PublicRoutes'));

<<<<<<< HEAD
// router.use(verifyToken);
router.use(require('./PrivateRoutes'));

module.exports = router;
=======
//router.use(verifyToken);
router.use(require('./PrivateRoutes'));

module.exports = router;
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
