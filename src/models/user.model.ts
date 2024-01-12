import { Location } from './location.model';
import { RolePermission } from './permission.model';
import { Role } from './role.model';

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  image: string,
  email: string;
  token: string;
  locations: Location[];
  role: Role;
  passwordChange: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export function hasPermission(role: Role | undefined, permission: RolePermission | null) {
  
  if(permission === 0) return true;
  
    return role?.permissions.find(i => i.id === permission) ?? false;
}