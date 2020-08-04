import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.send('Oi');
});

app.listen(3333, () => {
  console.log('🚀 Backend started!');
});
