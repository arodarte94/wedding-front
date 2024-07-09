import { ENV } from '../environment/environment';

export type Methods =
  | 'head'
  | 'options'
  | 'put'
  | 'post'
  | 'patch'
  | 'delete'
  | 'get';

interface Endpoint {
  route: string;
  method: Methods;
}

export const ENDPOINTS: Record<string, Endpoint> = {
  // Auth
  login: { route: ENV.basePath + 'login', method: 'post' },
  recover: { route: ENV.basePath + 'recover/link', method: 'post' },
  logout: { route: ENV.basePath + 'logout', method: 'get' },
  password: { route: ENV.basePath + 'account/password', method: 'patch' },
  sendResetPasswordLink: { route: ENV.basePath + 'recover', method: 'post' },

  // Products
  getProducts: { route: ENV.basePath + 'products', method: 'get' },
  getProduct: { route: ENV.basePath + 'products/', method: 'get' },
  getIncludedIn: {
    route: ENV.basePath + 'recipes/included-in/',
    method: 'get',
  },
  upsertProduct: { route: ENV.basePath + 'products', method: 'post' },
  deleteProducts: { route: ENV.basePath + 'products', method: 'delete' },
  uploadProductImages: {
    route: ENV.basePath + 'products/images/',
    method: 'post',
  },
  deleteProductImages: {
    route: ENV.basePath + 'products/images',
    method: 'post',
  },
  getUnits: { route: ENV.basePath + 'units', method: 'get' },
  getProductTypes: { route: ENV.basePath + 'products-types', method: 'get' },
  getProductSizes: { route: ENV.basePath + 'sizes', method: 'get' },
  saveIngredient: { route: ENV.basePath + 'recipes/', method: 'post' },
  updateIngredient: { route: ENV.basePath + 'recipes/', method: 'put' },
  deleteIngredients: { route: ENV.basePath + 'recipes', method: 'delete' },
  createSize: { route: ENV.basePath + 'recipes/size/', method: 'post' },
  deleteSize: { route: ENV.basePath + 'recipes/size', method: 'delete' },

  // Prices
  getPriceLists: { route: ENV.basePath + 'pricelists', method: 'get' },
  getPriceList: { route: ENV.basePath + 'pricelists/', method: 'get' },
  upsertPricelist: { route: ENV.basePath + 'pricelists', method: 'post' },
  deletePricelists: { route: ENV.basePath + 'pricelists', method: 'delete' },
  getPrices: { route: ENV.basePath + 'prices', method: 'get' },
  getPrice: { route: ENV.basePath + 'prices/', method: 'get' },
  upsertPrice: { route: ENV.basePath + 'prices', method: 'post' },
  getPriceLogs: { route: ENV.basePath + 'prices/logs', method: 'get' },

  // Roles
  getRoles: { route: ENV.basePath + 'roles', method: 'get' },
  getRole: { route: ENV.basePath + 'roles/', method: 'get' },
  getPermissions: { route: ENV.basePath + 'permissions', method: 'get' },
  upsertRole: { route: ENV.basePath + 'roles', method: 'post' },
  deleteRoles: { route: ENV.basePath + 'roles', method: 'delete' },

  // Users
  getUsers: { route: ENV.basePath + 'users', method: 'get' },
  getUser: { route: ENV.basePath + 'users/', method: 'get' },
  getUsersWithPermission: {
    route: ENV.basePath + 'users/permission/',
    method: 'get',
  },
  upsertUser: { route: ENV.basePath + 'users', method: 'post' },
  deleteUsers: { route: ENV.basePath + 'users', method: 'delete' },
  updateAccount: { route: ENV.basePath + 'account', method: 'post' },
  usersReport: { route: ENV.basePath + 'reports/users', method: 'get' },

  // Timeclock
  getTimeclockLogs: { route: ENV.basePath + 'timeclock/logs', method: 'get' },
  getUserQrCode: { route: ENV.basePath + 'timeclock/user', method: 'get' },
  captureQrCode: { route: ENV.basePath + 'timeclock/capture', method: 'post' },
  attendanceMatrixReport: {
    route: ENV.basePath + 'reports/timeclock',
    method: 'get',
  },

  // Logs
  getActivityLog: { route: ENV.basePath + 'logs/activity', method: 'get' },
  getSessionLog: { route: ENV.basePath + 'logs/logins', method: 'get' },

  // Categories
  getCategories: { route: ENV.basePath + 'categories', method: 'get' },

  // Inventories
  getInventory: { route: ENV.basePath + 'warehouses/inventory', method: 'get' },
  getMovements: { route: ENV.basePath + 'warehouses/movements', method: 'get' },
  getMovementTypes: { route: ENV.basePath + 'movements/types', method: 'get' },
  createInventoryMovement: {
    route: ENV.basePath + 'warehouses',
    method: 'post',
  },
  inventoryReport: { route: ENV.basePath + 'reports/inventory', method: 'get' },

  // Tranfers
  getTransfers: { route: ENV.basePath + 'transfers', method: 'get' },
  getTransfer: { route: ENV.basePath + 'transfers/', method: 'get' },
  getProductsInTransit: {
    route: ENV.basePath + 'transfers/products',
    method: 'get',
  },
  upsertTransfer: { route: ENV.basePath + 'transfers', method: 'post' },
  sendTransfers: { route: ENV.basePath + 'transfers/send', method: 'put' },
  receiveTransfers: {
    route: ENV.basePath + 'transfers/receive',
    method: 'put',
  },
  cancelTransfers: { route: ENV.basePath + 'transfers/cancel', method: 'put' },
  deleteTransferProducts: {
    route: ENV.basePath + 'transfers/products',
    method: 'delete',
  },
  getTransfersStatus: {
    route: ENV.basePath + 'status/transfers',
    method: 'get',
  },

  // Clients
  getClients: { route: ENV.basePath + 'clients', method: 'get' },
  getClient: { route: ENV.basePath + 'clients/', method: 'get' },
  upsertClient: { route: ENV.basePath + 'clients', method: 'post' },

  // Invoices
  getInvoices: { route: ENV.basePath + 'invoices', method: 'get' },
  getInvoice: { route: ENV.basePath + 'invoices/', method: 'get' },
  upsertInvoice: { route: ENV.basePath + 'invoices', method: 'post' },
  upsertInvoiceProducts: {
    route: ENV.basePath + 'invoices/products/',
    method: 'post',
  },
  deleteInvoiceProducts: {
    route: ENV.basePath + 'invoices/products',
    method: 'delete',
  },
  stampInvoices: { route: ENV.basePath + 'invoices', method: 'patch' },
  getInvoicesStatus: { route: ENV.basePath + 'status/invoices', method: 'get' },
  getRegimes: { route: ENV.basePath + 'regimes', method: 'get' },
  getPaymentForms: { route: ENV.basePath + 'payment-forms', method: 'get' },
  getPaymentMethods: { route: ENV.basePath + 'payment-methods', method: 'get' },
  getCfdiUses: { route: ENV.basePath + 'cfdi-uses', method: 'get' },
  getProductCodes: { route: ENV.basePath + 'product-codes', method: 'get' },

  // Sales
  getSales: { route: ENV.basePath + 'sales', method: 'get' },
  getSale: { route: ENV.basePath + 'sales/', method: 'get' },
  createSale: { route: ENV.basePath + 'sales', method: 'post' },
  printSale: { route: ENV.serverPath + 'shared/sale/', method: 'get' },
  cancelSales: { route: ENV.basePath + 'sales', method: 'delete' },
  salesReport: { route: ENV.basePath + 'reports/sales', method: 'get' },
  salesByProductsReport: {
    route: ENV.basePath + 'reports/sales/products',
    method: 'get',
  },

  // Orders
  getStations: { route: ENV.basePath + 'stations', method: 'get' },
  createStation: { route: ENV.basePath + 'stations', method: 'post' },
  updateStation: { route: ENV.basePath + 'stations/', method: 'patch' },
  closeOrder: { route: ENV.basePath + 'orders/close/', method: 'patch' },
  deleteStation: { route: ENV.basePath + 'stations/', method: 'delete' },

  // Registers
  getRegisters: { route: ENV.basePath + 'registers', method: 'get' },
  createRegister: { route: ENV.basePath + 'registers', method: 'post' },
  useRegister: { route: ENV.basePath + 'registers/use/', method: 'patch' },
  updateRegister: { route: ENV.basePath + 'registers/', method: 'patch' },
  cashoutRegister: { route: ENV.basePath + 'registers', method: 'put' },
  deleteRegister: { route: ENV.basePath + 'registers/', method: 'delete' },
  registersLogs: { route: ENV.basePath + 'registers/logs', method: 'get' },
  getRegisterLogTypes: {
    route: ENV.basePath + 'registers/logs/types',
    method: 'get',
  },

  // Locations
  getLocations: { route: ENV.basePath + 'locations', method: 'get' },
  getLocation: { route: ENV.basePath + 'locations/', method: 'get' },
  upsertLocation: { route: ENV.basePath + 'locations', method: 'post' },
  updateLocationNotifications: {
    route: ENV.basePath + 'locations/notifications/',
    method: 'post',
  },

  // Charts
  salesByLocationChart: {
    route: ENV.basePath + 'charts/sales/locations',
    method: 'get',
  },
  yearlySalesChart: {
    route: ENV.basePath + 'charts/sales/months',
    method: 'get',
  },
  quickStats: {
    route: ENV.basePath + 'charts/quickstats',
    method: 'get',
  },
};
