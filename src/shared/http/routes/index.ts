import { Router } from 'express';
import { AppError } from 'src/shared/errors/AppError';


const routes = Router();

routes.get('/', (request, response) => {
  throw new AppError('deu ruim', 400);
  return response.json({ message: 'Olá Dev!' });
});

export { routes };
