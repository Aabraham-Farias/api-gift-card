<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const mongoose = require('mongoose');
// const { MONGO_URI } = require('../config');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database...'));
=======
const mongoose = require('mongoose');
//const { MONGO_URI } = require('../config');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('Database connected'))
    .catch(err => console.log('Error connecting to database...'));
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
