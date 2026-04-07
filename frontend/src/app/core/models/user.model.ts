export type UserRole = 'ROLE_USER' | 'ROLE_ADMIN';

export interface IUser {
  id: string;
  username: string;
  email: string;
  passwordHash?: string;
  isActive: boolean;
  enabled: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: string;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;

  roles: IRole[];
}

export interface IRole {
  id: string;
  name: UserRole;
}
