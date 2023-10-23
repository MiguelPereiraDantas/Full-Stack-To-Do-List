const errorMiddleware = (error, _request, response, next) => {
    response.status(500).json({ error: error.message });
    next();
  };
  
  module.exports = errorMiddleware;