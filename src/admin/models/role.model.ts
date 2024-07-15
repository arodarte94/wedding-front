import { Permission } from "./permission.model";
import { User } from "./user.model";

export interface Role {
  id: number;
  name: string;
  description: string;
  level: number;
  permissions: Permission[];
  users: User[];
  usersCount: number;
  createdAt: Date;
  updatedAt: Date;
}
