import { CreateRoleService } from './../service/createRoleService/createRoleService';
import { CreateRoleController } from './CreateRoleController';
import { RolesRepository } from './../repositories/RolesRespository';

const rolesRepository = new RolesRepository();

const createRoleService = new CreateRoleService(rolesRepository);

export const createRoleController = new CreateRoleController(createRoleService);
