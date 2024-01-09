import { Role } from 'src/roles/entities/Roles';
import { RolesRepository } from 'src/roles/repositories/RolesRespository';
import { AppError } from 'src/shared/errors/AppError';

type CreatedRoleDTO = {
  name: string;
};

export class CreateRoleService {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreatedRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name);
    if (roleAlreadyExists) {
      throw new AppError('Role already exists');
    }
    return this.rolesRepository.create({ name });
  }
}
