import { Router } from 'express';
import { RolesRepository } from '../repositories/RolesRespository';


const rolesRouter = Router();

const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request, response) => {
  const { name } = request.body;
  const roleAlReadyExist = rolesRepository.findByName(name);

  if (roleAlReadyExist) {
    return response.status(400).json({ error: 'Role already exists' });
  }
  const role = rolesRepository.create({ name });

  return response.status(201).json(role);
});

rolesRouter.get('/', (request, response) => {
  return response.json(rolesRepository.findAll());
});

export { rolesRouter };
