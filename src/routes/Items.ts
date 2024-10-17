import { FastifyInstance } from 'fastify';
import { listItemsController } from '../controllers/list-items-controller';

export const itemsRoutes = async (app: FastifyInstance) => {
  app.get('/items', listItemsController);
};
