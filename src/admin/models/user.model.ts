import { Group } from './group.model';
import { Location } from './location.model';
import { RolePermission } from './permission.model';
import { Role } from './role.model';

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  image: string,
  slots: number,
  email: string;
  link: string;
  token: string;
  locations: Location[];
  role: Role;
  group: Group;
  host: User;
  type_id: number;
  type: string;
  entree_id: number;
  entree: string;
  dinner_id: number;
  dinner: string;
  passwordChange: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export function hasPermission(role: Role | undefined, permission: RolePermission | null) {
  
  if(permission === 0) return true;
  
    return role?.permissions.find(i => i.id === permission) ?? false;
}