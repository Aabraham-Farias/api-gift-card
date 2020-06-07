<<<<<<< HEAD
/* eslint-disable no-console */
require('dotenv').config();
// 1) Obtenemos app y PORT mediante "destructuring"
// 2) app y PORT vienen del archivo index de la carpeta server
// NOTA: No es necesario agregar "index" cuando se solicita mediante
=======
require('dotenv').config()
// 1) Obtenemos app y PORT mediante "destructuring"
// 2) app y PORT vienen del archivo index de la carpeta server
// NOTA: No es necesario agregar "index" cuando se solicita mediante 
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const { server, PORT } = require('./server');
require('./database');

// Encedemos servidor
<<<<<<< HEAD
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
=======
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
