import fastify from 'fastify';
import cors from '@fastify/cors';
import { itemsRoutes } from '../routes/Items';

export const app = fastify();

app.register(cors, {
  origin: '*',
});

app.register(itemsRoutes, { prefix: '/api' });
