import fastify from 'fastify';
import { itemsRoutes } from '../routes/Items';

export const app = fastify();

app.register(itemsRoutes, { prefix: '/api' });
