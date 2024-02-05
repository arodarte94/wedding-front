import axios from "../lib/axiosInstance";
import { ENV } from "../../environment/environment";

enum ENDPOINTS {
  GET = 'roles',
  PERMISSIONS = 'permissions',
  UPSERT = 'roles',
  DELETE = 'roles'
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
  set(response?.status === 200 ? response.data.role : null);
}

export const getPermissions = async (set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.PERMISSIONS);
  set(response.data.modules);
}

export const upsert = async (requestData: any, id?: number) => {

  const request = {
    name: requestData?.name,
    description: requestData?.description,
    permissions: requestData?.permissions
  }

  const endpoint = ENV.basePath + ENDPOINTS.UPSERT + (id ? '/' + id : "")
  const response = await axios.post(endpoint, request);

  return response;
}

export const deleteRoles = async (roles: number[], replacementRole?: number|null) => {

  const response = await axios.delete(ENV.basePath + ENDPOINTS.DELETE, { data: { 
    roles: roles,
    newRole: replacementRole
  } });
  return response;
}
