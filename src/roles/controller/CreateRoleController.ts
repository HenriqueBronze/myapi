import { Request, Response } from 'express';
import { CreateRoleService } from '../service/createRoleService/createRoleService';

export class CreateRoleController {
  constructor(private createRoleService: CreateRoleService) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const role = this.createRoleService.execute({ name });

    return response.status(201).json(role);
  }
}
