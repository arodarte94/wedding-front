import { User } from "./user.model";

export interface Group {
  id: number;
  name: string;
  capacity: number;
  description?: string;
  usersCount: number;
  createdAt: Date;
  updatedAt: Date;
  users: User[];
}
