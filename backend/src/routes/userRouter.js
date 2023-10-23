const router = require('express').Router();

const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../controllers/userController');

router.post('/users',
  userMiddleware.validateBody,
  userMiddleware.checkUserAlreadyExists,
  userController.registerNewUser
);

router.post('/login',
  userMiddleware.validateLogin,
  userController.userLogin,
);

module.exports = router;