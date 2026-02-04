/**
 * Usuario del sistema
 */
export interface User {
  id: string;
  auth0UserId: string;
  email: string;
  name: string;
  createdAt: Date;
  lastLoginAt?: Date;
}

