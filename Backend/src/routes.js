const express = require('express');
const routes = express.Router();

const verifyJwt = require('./app/middlewares/authController');

const userController = require('./app/controllers/userController');
const monthController =require('./app/controllers/monthController');
const expenseController = require('./app/controllers/expenseController');

routes.get('/', (res, resp) => {
    return resp.json({message:"hello world"})
});

routes.post('/user', userController.register );
routes.post('/login', userController.login);
routes.post('/forgot_password', userController.forgotPassword);
routes.post('/reset_password', userController.resetPassword);

routes.post('/month',verifyJwt, monthController.create );
routes.get('/month', verifyJwt, monthController.list);
routes.get('/month/last_month', verifyJwt, monthController.lastMonth);
routes.put('/month/:id', verifyJwt, monthController.edit);

routes.post('/expense',verifyJwt, expenseController.create);
routes.get('/expense', verifyJwt, expenseController.list);
routes.put('/expense/:id', verifyJwt, expenseController.edit);

module.exports = routes;
