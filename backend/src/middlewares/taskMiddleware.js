const joi = require('joi');

const validateGet = (request, response, next) => {

  const schema = joi.object({ userId: joi.number().required() });
  
  const { error } = schema.validate(request.body);

  if (error) return response.status(422).json({ error: error.message });

  next();
};

const validateBody = (request, response, next) => {

  const schema = joi.object({
    title: joi.string().required(),
    status: joi.string().required(),
    userId: joi.number().required(),
  });
  
  const { error } = schema.validate(request.body);

  if (error) return response.status(422).json({ error: error.message });

  next();
};

const validateEdit = (request, response, next) => {

  const schema = joi.object({
    title: joi.string().required(),
    status: joi.string().required(),
  });
  
  const { error } = schema.validate(request.body);

  if (error) return response.status(422).json({ error: error.message });

  next();
};

module.exports = {
  validateGet,
  validateBody,
  validateEdit,
};