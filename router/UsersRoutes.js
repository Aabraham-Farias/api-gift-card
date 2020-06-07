const express = require('express');
<<<<<<< HEAD

const router = express.Router();
const { UsersController } = require('../controller');
const { UsersValidator } = require('../validators');
=======
const router = express.Router();
const { UsersController } = require('../controller');
const { UsersValidator } = require('../validators')
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295

router.post('/users', UsersValidator.create, UsersController.create);
router.get('/users', UsersController.find);
router.get('/users/:id', UsersController.findById);
router.patch('/users/:id', UsersController.findByIdAndUpdate);
router.delete('/users/:id', UsersController.findByIdAndDelete);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
