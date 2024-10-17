import fastify from 'fastify';
import { itemsRoutes } from './routes/Items';

const server = fastify();

server.register(itemsRoutes, { prefix: '/api' });

server.listen({ port: 5555 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
