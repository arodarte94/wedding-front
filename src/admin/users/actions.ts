import axios from "../lib/axiosInstance";
import { ENV } from "../../environment/environment";

enum ENDPOINTS {
  GET = "users",
  GETBYCODE = "users/code",
  CREATE = "users",
  UPDATE = "users",
  DELETE = "users",
  GETUSERSTYPES = "users-types",
  GETENTREES = "entrees",
  GETDINNERS = "dinners",
  SAVEGUESTS = "guests",
}

export const getUsers = async (
  page: number = 1,
  pageLength: number = 10,
  sortKey: string | null,
  params?: any,
) => {

  console.log(params);
  const response = await axios.get(ENV.basePath + ENDPOINTS.GET, {
    params: {
      page: page,
      itemsPerPage: pageLength,
      orderBy: sortKey,
      role: params?.role,
      name: params?.name,
      groups: params?.groups,
      hosts: params?.hosts,
      types: params?.types,
      dinners: params?.dinners,
      entrees: params?.entrees,
      confirmed: params?.confirmed,
      unconfirmed: params?.unconfirmed,
    },
  });
  return response;
};

export const getUser = async (id: string, set: any) => {
  const response = await axios.get(ENV.basePath + ENDPOINTS.GET + "/" + id);
  set(response.data.user);
};

export const getUserByCode = async (id: string, set: any) => {
  try {
    const response = await axios.get(
      ENV.basePath + ENDPOINTS.GETBYCODE + "/" + id,
    );
    set(response.data.user);
  } catch (error) {}
};

export const create = async (
  name?: string,
  username?: string,
  email?: string,
  role?: number,
  host?: number,
  type?: number,
  group?: number,
  entree?: number,
  dinner?: number,
  slots?: number,
) => {
  const response = await axios.post(ENV.basePath + ENDPOINTS.CREATE, {
    name: name,
    username: username,
    email: email,
    role: role,
    host: host,
    type: type,
    group: group,
    entree: entree,
    dinner: dinner,
    slots: slots,
  });

  return response;
};

export const update = async (
  id: number,
  name?: string,
  username?: string,
  email?: string,
  role?: number,
  host?: number,
  type?: number,
  group?: number,
  entree?: number,
  dinner?: number,
  slots?: number,
) => {
  const response = await axios.post(
    ENV.basePath + ENDPOINTS.UPDATE + "/" + id,
    {
      name: name,
      username: username,
      email: email,
      role: role,
      host: host,
      type: type,
      group: group,
      entree: entree,
      dinner: dinner,
      slots: slots,
    },
  );

  return response;
};

export const saveGuests = async (requestData?: any) => {

  try {
  const response = await axios.post(ENV.basePath + ENDPOINTS.SAVEGUESTS, {
    guest: requestData,
  });
  
  return response;
  }
  catch (error) {
    return error;
  }
};

export const deleteUsers = async (users: number[]) => {
  const response = await axios.delete(ENV.basePath + ENDPOINTS.DELETE, {
    data: {
      users: users,
    },
  });

  return response;
};

export const getUsersTypes = async (params?: any) => {
  return await axios.get(ENV.basePath + ENDPOINTS.GETUSERSTYPES, {
    params: {
      name: params?.name,
    },
  });
};

export const getEntrees = async (params?: any) => {
  return await axios.get(ENV.basePath + ENDPOINTS.GETENTREES, {
    params: {
      name: params?.name,
    },
  });
};

export const getDinners = async (params?: any) => {
  return await axios.get(ENV.basePath + ENDPOINTS.GETDINNERS, {
    params: {
      name: params?.name,
    },
  });
};

export const usersReport = async (params?: any) => {
  return await axios.get(
    ENV.basePath + 'reports/users',
    {
      responseType: 'blob',
      params: {
        startDate: params?.startDate,
        endDate: params?.endDate,
        usersList: true,
        includeSoftDeleted: params?.includeSoftDeleted,
      },
    },
  );
};
