import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

/**
 * DTO para login (si se usa email/password además de Auth0)
 */
export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}

