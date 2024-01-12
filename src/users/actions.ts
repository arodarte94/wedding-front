import axios from "../lib/axiosInstance";
import { ENV } from "../environment/environment";

enum ENDPOINTS {
  GET = 'users',
  CREATE = 'users',
  UPDATE = 'users',
}   

export const getUsers = async (page: number = 1, pageLength: number = 10, sortKey: string | null, params?: any) => {

    const response = await axios.get(ENV.basePath + ENDPOINTS.GET, { 
      params: 
      { 
        page: page,
        itemsPerPage: pageLength,
        orderBy: sortKey,
        role: params?.role
      } 
    });
    return response;
}


export const getUser = async (id: string, set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.GET + "/" + id);
  set(response.data.user);
}

export const create = async (name?: string, username?: string, email?: string, role?: number) => {

  const response = await axios.post(ENV.basePath + ENDPOINTS.CREATE, {
    name: name,
    username: username,
    email: email,
    role: role,
  });

  return response;
}

export const update = async (id: number, name?: string, username?: string, email?: string, role?: number) => {

  const response = await axios.post(ENV.basePath + ENDPOINTS.UPDATE + '/' + id, {
    name: name,
    username: username,
    email: email,
    role: role,
  });

  return response;
}