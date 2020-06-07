const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      author: Joi.string().required(),
      isbn: Joi.string(),
    }),
  }),
  addBookToUser: celebrate({
    [Segments.BODY]: Joi.object().keys({
      idBook: Joi.string().required(),
    }),
  }),
};
<<<<<<< HEAD
=======

>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
