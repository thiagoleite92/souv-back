import fastify from 'fastify';
import cors from '@fastify/cors';
import { itemsRoutes } from '../routes/items-route';

export const app = fastify();

app.register(cors, {
  origin: [
    '*',
    'https://souv-front.vercel.app/',
    'https://souv-front-60zyb27ax-thiagoleite92s-projects.vercel.app/',
  ],
});

app.register(itemsRoutes, { prefix: '/api' });
