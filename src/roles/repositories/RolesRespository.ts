import { Role } from '../entities/Roles';

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  roles: Role[] = [];

  constructor() {
    this.roles = [];
  }
  create({ name }: CreateRoleDTO) {
    const role = new Role();
    Object.assign(role, {
      name,
      create_at: new Date(),
    });

    this.roles.push(role);

    return role;
  }
}
