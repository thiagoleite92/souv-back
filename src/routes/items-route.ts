import { FastifyInstance } from 'fastify';
import { listItemsController } from '../controllers/list-items-controller';
import { checkItemController } from '../controllers/check-item-controller';
import { addItemController } from '../controllers/add-item-controller';

export const itemsRoutes = async (app: FastifyInstance) => {
  app.get('/items', listItemsController);
  app.patch('/items/:itemId', checkItemController);
  app.post('/items', addItemController);
};
