import axios from "../lib/axiosInstance";
import { ENV } from "../../environment/environment";

enum ENDPOINTS {
  GET = 'users',
  GETBYUUID = 'users/uuid',
  CREATE = 'users',
  UPDATE = 'users',
  DELETE = 'users'
}   

export const getUsers = async (page: number = 1, pageLength: number = 10, sortKey: string | null, params?: any) => {

    const response = await axios.get(ENV.basePath + ENDPOINTS.GET, { 
      params: 
      { 
        page: page,
        itemsPerPage: pageLength,
        orderBy: sortKey,
        role: params?.role,
        name: params?.name,
        group: params?.group,
        host: params?.host,
        type: params?.type?.toString(),
        confirmed: params?.confirmed
      } 
    });
    return response;
}

export const getHosts = async (page: number = 1, pageLength: number = 1000, sortKey: string | null, params?: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.GET, { 
    params: 
    { 
      page: page,
      itemsPerPage: pageLength,
      orderBy: sortKey,
      role: params?.role,
      name: params?.name,
      hostsOnly: true,
      type: params?.type
    } 
  });
  return response;
}



export const getUser = async (id: string, set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.GET + "/" + id);
  set(response.data.user);
}

export const getUserByUuid = async (id: string, set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.GETBYUUID + "/" + id);
  set(response.data.user);
}

export const create = async (name?: string, username?: string, email?: string, role?: number, host?: number, type?: number, group?: number, dinner?: number, slots?: number) => {

  const response = await axios.post(ENV.basePath + ENDPOINTS.CREATE, {
    name: name,
    username: username,
    email: email,
    role: role,
    host: host,
    type: type,
    group: group,
    dinner: dinner,
    slots: slots
  });

  return response;
}

export const update = async (id: number, name?: string, username?: string, email?: string, role?: number, host?: number, type?: number, group?: number, dinner?: number, slots?: number) => {

  const response = await axios.post(ENV.basePath + ENDPOINTS.UPDATE + '/' + id, {
    name: name,
    username: username,
    email: email,
    role: role,
    host: host,
    type: type,
    group: group,
    dinner: dinner,
    slots: slots
  });

  return response;
}

export const deleteUsers = async (users: number[]) => {

  const response = await axios.delete(ENV.basePath + ENDPOINTS.DELETE, { data: 
    { 
      users: users,
    } 
  });

  return response;
}