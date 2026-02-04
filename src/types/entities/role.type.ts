import { RoleType } from '../enums';

/**
 * Rol con permisos asociados
 */
export interface Role {
  id: string;
  name: RoleType;
  description: string;
  permissions: string[];
}

