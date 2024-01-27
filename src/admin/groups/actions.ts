import axios from "../lib/axiosInstance";
import { ENV } from "../../environment/environment";

enum ENDPOINTS {
  GET = 'groups',
  CREATE = 'groups',
  UPDATE = 'groups'
}   

export const getGroups = async (page: number = 1, pageLength: number = 10, sortKey: string | null,  params?: any) => {

    const response = await axios.get(ENV.basePath + ENDPOINTS.GET, { 
      params: 
      { 
        page: page,
        itemsPerPage: pageLength,
        orderBy: sortKey,
        name: params?.name
      } 
    });
    console.log(response);
    return response;
}

export const getGroup = async (id: string, set: any) => {

  const response = await axios.get(ENV.basePath + ENDPOINTS.GET + "/" + id);
  set(response.data.group);
}


export const create = async (name?: string, capacity?: number ) => {

  const response = await axios.post(ENV.basePath + ENDPOINTS.CREATE, {
    name: name,
    capacity: capacity,
  });

  return response;
}

export const update = async (id: number, name?: string, capacity?: number ) => {
  const response = await axios.put(ENV.basePath + ENDPOINTS.UPDATE + '/' + id, {
    name: name,
    capacity: capacity,
  });

  return response;
}