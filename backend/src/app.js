require('express-async-errors');
const cors = require('cors');
const express = require('express');

// error middleware
const errorMiddleware = require('./middlewares/errorMiddleware');

// routers
const userRouter = require('./routes/userRouter');
const taskRouter = require('./routes/taskRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(errorMiddleware);

module.exports = app;