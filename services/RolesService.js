const { Roles } = require('../models/Roles');

module.exports = {
  create: (body) => {
    const newRole = new Roles(body);
    return newRole;
  },
  update: (role, body) => {
    Object.assign(role, body);
    return role;
<<<<<<< HEAD
  },
};
=======
  }
}
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
