require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

function verifyJwt(req, res, next){
  const token = req.headers['x-access-token'];

  if(!token){
    return res.status(500).json({ auth:false, message: 'No token provided.'})
  }

  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

    req.body.userId = decoded.id;
    next();
  })

}

module.exports = verifyJwt;