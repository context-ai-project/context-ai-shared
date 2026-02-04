/**
 * DTO para información de usuario autenticado
 */
export class UserDto {
  id!: string;
  auth0UserId!: string;
  email!: string;
  name!: string;
  roles?: string[];
  sectors?: string[];
  lastLoginAt?: Date;
}

