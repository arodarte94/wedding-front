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

  CAN_ACCESS_PRODUCTS = 300, // 'Ver catálogo de productos',
  CAN_CREATE_PRODUCT = 301, // 'Agregar producto',
  CAN_DELETE_PRODUCT = 302, // 'Eliminar producto',
  CAN_EDIT_PRODUCT = 303, // 'Editar producto',
  CAN_ADD_INGREDIENT = 304, // 'Agregar ingrediente a receta de producto',
  CAN_EDIT_INGREDIENT = 305, // 'Editar ingrediente en receta de producto',
  CAN_DELETE_INGREDIENT = 306, // 'Eliminar ingrediente en receta de producto',
  CAN_SEE_PRODUCT_RECIPE = 307, // 'Ver la receta de un producto'

  CAN_ACCESS_INVENTORY = 400, //  'Ver inventario de almacen',
  CAN_ADD_INVENTORY = 401, //  'Agregar inventario a almacen',
  CAN_REMOVE_INVENTORY = 402, //  'Descontar inventario en almacen',
  CAN_DELETE_INVENTORY = 403, //  'Eliminar registro de inventario',

  CAN_ACCESS_INVENTORY_MOVEMENTS = 500, //  'Ver movimientos de inventarios',

  CAN_ACCESS_INVENTORY_TRANSFERS = 600, //  'Ver transferencias entre sucursales',
  CAN_SEE_TRANSFER_DETAILS = 601, //  'Ver datos de transferencia',
  CAN_EDIT_INVENTORY_TRANSFER = 602, //  'Modificar transferencia',
  CAN_CREATE_INVENTORY_TRANSFER = 603, //  'Generar transferencia',
  CAN_CANCEL_INVENTORY_TRANSFER = 604, //  'Cancelar transferencia',
  CAN_SEND_INVENTORY_TRANSFER = 605, //  'Enviar transferencia',
  CAN_RECEIVE_INVENTORY_TRANSFER = 606, //  'Recibir transferencia',

  CAN_ADD_PHYSICAL_INVENTORY = 700, //  'Registrar inventario físico',

  CAN_CREATE_SALE = 800, //  'Crear venta',
  CAN_ACCESS_SALES = 801, // 'Ver listado de ventas'
  CAN_SEE_SALE_DETAILS = 802, //  'Ver datos de venta',
  CAN_CANCEL_SALE = 803, //  'Cancelar venta',
  CAN_APPLY_SALE_DISCOUNT = 804, // 'Aplicar descuento en venta'

  CAN_ACCESS_CASH_REGISTER = 900, // 'Acceder a módulo de caja'
  CAN_APPROVE_MODIFY_CASH_REGISTER = 902, // 'Modificar dinero en caja'
  CAN_APPROVE_CLOSE_CASH_REGISTER = 903, // 'Aprobar cierre de caja'
  CAN_UPDATE_EXCHANGE_RATE = 905, //  'Actualizar tipo de cambio',

  CAN_ACCESS_ORDERS = 1000, //  'Ver órdenes y estaciones',
  CAN_CREATE_ORDER_STATION = 1001, //  'Agregar nueva estación',
  CAN_EDIT_ORDER_STATION = 1002, //  'Editar estación',
  CAN_DELETE_ORDER_STATION = 1003, //  'Eliminar estación',
  CAN_CLOSE_ORDER = 1004, //  'Cerrar orden de producto',

  CAN_DOWNLOAD_INVENTORY_REPORT = 1100, // 'Generar reportes de inventario'
  CAN_DOWNLOAD_SALES_REPORT = 1101, // 'Generar reportes de venta'

  CAN_SEE_GRAPHS_AND_STATS = 1200, // 'Ver gráficas y estadísticas del negocio'

  CAN_ACCESS_ACTIVITY_LOG = 1300, // 'Ver bitácora de actividad'
  CAN_ACCESS_SESSION_LOG = 1301, // 'Ver bitácora de sesiones'
}
