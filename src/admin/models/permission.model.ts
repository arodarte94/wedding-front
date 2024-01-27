import { BaseInterface } from './base-interface.model';

export interface PermissionModule {
  id: number;
  name: string;
  permissions: Permission[];
}
export interface Permission extends BaseInterface {}

export enum RolePermission {
  DASHBOARD = 0,
  CAN_ACCESS_USERS = 100, //  'Ver catálogo de usuarios',
  CAN_CREATE_USER = 101, //  'Crear nuevo usuario',
  CAN_EDIT_USER = 103, //  'Modificar usuario',
  CAN_DELETE_USER = 104, //  'Eliminar usuarios',

  CAN_ACCESS_ROLES = 200, //  'Ver roles y permisos',
  CAN_CREATE_ROLE = 201, // 'Agregar rol de usuario',
  CAN_EDIT_ROLE = 202, // 'Editar rol de usuarios',
  CAN_DELETE_ROLE = 203, //  'Eliminar rol de usuarios',

  CAN_ACCESS_GROUPS = 300, //  'Ver grupos',

  CAN_SEE_GRAPHS_AND_STATS = 1200, // 'Ver gráficas y estadísticas del negocio'

  CAN_ACCESS_ACTIVITY_LOG = 1300, // 'Ver bitácora de actividad'
  CAN_ACCESS_SESSION_LOG = 1301, // 'Ver bitácora de sesiones'
}
