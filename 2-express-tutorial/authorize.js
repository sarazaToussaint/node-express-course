const authorize = (req, res, next) => {
  console.log(req, res, next);
  next();
}

module.exports = authorize;