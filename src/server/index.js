import express from 'express';
import handleRender from './handleRender';
import server from './server';

// this is a very simple express app designed only for the purpose of this repo
const app = express();
const port = 3000;

// server static content
app.use('/dist', express.static('dist'));

// backend routes
app.use('/cg', server);

// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});
