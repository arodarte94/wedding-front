import axios from "../lib/axiosInstance";
import { ENV } from "../../environment/environment";

enum ENDPOINTS {
  GET = 'roles',
  PERMISSIONS = 'permissions',
  CREATE = 'roles',
  UPDATE = 'roles'
}   

export const getRoles = async (page: number = 1, pageLength: number = 10, sortKey: string | null,  params?: any) => {

    const response = await axios.get(ENV.basePath + ENDPOINTS.GET, { 
      params: 
      { 
        page: page,
        itemsPerPage: pageLength,
        orderBy: sortKey,
        name: params?.name
      } 
    });
    return response;
}

export const getRole = async (id: string, set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.GET + "/" + id);
  set(response.data.role);
}

export const getPermissions = async (set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.PERMISSIONS);
  set(response.data.modules);
}

export const create = async (name?: string, description?: string, permissions?: number[]) => {

  const response = await axios.post(ENV.basePath + ENDPOINTS.CREATE, {
    name: name,
    description: description,
    permissions: permissions
  });

  return response;
}

export const update = async (id: number, name?: string, description?: string, permissions?: number[]) => {

  const response = await axios.put(ENV.basePath + ENDPOINTS.UPDATE + '/' + id, {
    name: name,
    description: description,
    permissions: permissions
  });

  return response;
}