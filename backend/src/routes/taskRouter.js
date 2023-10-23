const router = require('express').Router();

const taskController = require('../controllers/taskController');
const taskMiddleware = require('../middlewares/taskMiddleware');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.get('/tasks',
  tokenMiddleware.validateToken,
  taskController.getAllByUserId
);

router.post('/tasks',
  taskMiddleware.validateBody,
  taskController.addNewTask
);

router.delete('/tasks/:id',
  taskController.deleteTask
);

router.put('/tasks/:id',
  taskMiddleware.validateEdit,
  taskController.editTask,
);

module.exports = router;