/**
 * Sector o departamento organizacional
 */
export interface Sector {
  id: string;
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
}

