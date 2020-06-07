const mongoose = require('mongoose');
<<<<<<< HEAD

const { Schema } = mongoose;

const rolesSchema = new Schema({
  title: {
    type: String,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
=======
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    title: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
});

const Roles = mongoose.model('Roles', rolesSchema);

<<<<<<< HEAD
module.exports = { Roles, rolesSchema };
=======
module.exports = { Roles, rolesSchema };
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
