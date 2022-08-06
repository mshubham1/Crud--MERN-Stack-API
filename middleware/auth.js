const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    if(typeof token != 'undefined'){
      const bearer = token.split(" ");
      const bearertoken = bearer[1];
      req.token = bearertoken;
      next();
    }
    //const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    //req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;