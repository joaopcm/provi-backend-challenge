import { Router } from 'express';

import UserController from './app/controllers/UserController';

import checkUserMiddleware from './app/middlewares/checkUser';

const routes = new Router();

routes.post('/users', checkUserMiddleware, UserController.store);

export default routes;
