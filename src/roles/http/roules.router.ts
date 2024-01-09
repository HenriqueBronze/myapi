import { Router } from 'express';
import { createRoleController } from '../controller';
import { RolesRepository } from '../repositories/RolesRespository';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

const createRolesController = createRoleController;

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  return response.json(rolesRepository.findAll());
});

export { rolesRouter };
