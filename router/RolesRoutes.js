const express = require('express');
<<<<<<< HEAD

const router = express.Router();
const { RolesController } = require('../controller');
const { RolesValidator } = require('../validators');
=======
const router = express.Router();
const { RolesController } = require('../controller');
const { RolesValidator } = require('../validators')
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295

router.post('/users/:id/roles', RolesValidator.create, RolesController.create);
router.get('/users/:id/roles', RolesController.find);
router.get('/users/:idUser/roles/:idRole', RolesController.findById);
<<<<<<< HEAD
router.patch('/users/:idUser/roles/:idRole', RolesValidator.update, RolesController.findByIdAndUpdate);
router.delete('/users/:idUser/roles/:idRole', RolesController.findByIdAndDelete);

module.exports = router;
=======
router.patch('/users/:idUser/roles/:idRole', RolesValidator.update, RolesController.findByIdAndUpdate); 
router.delete('/users/:idUser/roles/:idRole', RolesController.findByIdAndDelete);

module.exports = router;
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
