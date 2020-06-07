require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 4000;
const { errors } = require('celebrate');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));
server.use(cors());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.use('/api', require('../Views/routes'));

server.use(errors());

require('../database');

server.listen(PORT,()=>console.log(`Levantado en${PORT}`));