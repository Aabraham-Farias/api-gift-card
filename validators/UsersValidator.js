const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string(),
    }),
  }),
};
<<<<<<< HEAD
=======

>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
