const jwt = require('jsonwebtoken');

module.exports = {
<<<<<<< HEAD
  verifyToken: (req, res, next) => {
    try {
      if (!req.headers.authorization) res.status(403).send({ error: 'Authorization header must be provided' });
      const { authorization } = req.headers;
      // authorization contiene: "Bearer token";
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;
      next();
    } catch (error) {
      res.status(403).send({ error });
    }
  },
};
=======
    verifyToken: (req, res, next) => {
        try {
            if (!req.headers.authorization) res.status(403).send({ error: "Authorization header must be provided" });
            const { authorization } = req.headers;
            // authorization contiene: "Bearer token";
            const token = authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.decoded = decoded;
            next();
        } catch (error) {
            res.status(403).send({ error })
        }
    },
};
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
