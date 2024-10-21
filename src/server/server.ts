import { app } from '../app/app';

app
  .listen({
    host: '0.0.0.0',
    port: 5555,
  })
  .then(() => {
    console.log('HTTP Server Running! ' + 5555);
  });
