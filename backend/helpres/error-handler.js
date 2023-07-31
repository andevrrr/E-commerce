function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.statis(401).json({ message: "The user is not authorized" });
  }

  if (err.name === "ValidationError") {
    return res.statis(40).json({ message: err });
  }

  return res.status(500).json(err);
}

module.exports = errorHandler;