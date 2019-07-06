import Express from 'express';
function routeHandler(req, res, next) {
  console.log('in cg routehandler');
  res.end();
}
const router = express.Router([options])

export default routeHandler;
