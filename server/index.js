const express = require('express');
<<<<<<< HEAD

const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

=======
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const PORT = process.env.PORT || 4000;
const { errors } = require('celebrate');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload({
<<<<<<< HEAD
  useTempFiles: true,
  tempFileDir: '/tmp/',
=======
    useTempFiles: true,
    tempFileDir: '/tmp/',
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
}));
server.use(cors());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.use('/api/v1', require('../router'));

server.use(errors());

// exportar server para poder requerirlo desde otros archivos
<<<<<<< HEAD
module.exports = { server, PORT };
=======
module.exports = { server, PORT };
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
