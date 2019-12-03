import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import EndpointController from './app/controllers/EndpointController';

import authMiddleware from './app/middlewares/auth';
import checkEndpointMiddleware from './app/middlewares/checkEndpoint';
import checkEndpointProgress from './app/middlewares/checkEndpointProgress';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post(
  '/endpoints/:slug',
  checkEndpointMiddleware,
  checkEndpointProgress,
  EndpointController.store
);

export default routes;
