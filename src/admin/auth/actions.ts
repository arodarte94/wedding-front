import axios from "axios";
import axiosInstance from '../lib/axiosInstance'
import { ENV } from "../../environment/environment";

enum ENDPOINTS {
  LOGIN = 'login',
  RECOVER = 'recover/link',
  LOGOUT = 'logout',
}   

export const login = async (user: string, password: string, deviceName: string) => {
    
    const response = await axios.post(ENV.basePath + ENDPOINTS.LOGIN, {
        username: user,
        password: password,
        device_name: deviceName
      }
    );

    return response;
}

export const logout = async () => {
    await axiosInstance.get(ENV.basePath + ENDPOINTS.LOGOUT);
}

