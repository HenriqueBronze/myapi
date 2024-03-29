import { Router } from 'express';
import { rolesRouter } from 'src/roles/http/roules.router';


const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá Dev!' });
});

routes.use('/roles', rolesRouter);

export { routes };
