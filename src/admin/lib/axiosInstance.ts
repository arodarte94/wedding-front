import axios, { CancelTokenSource } from "axios";

const defaultInstance = axios.create();
defaultInstance.defaults.headers.common["Content-Type"] = "application/json";

let sources: CancelTokenSource[] = [];

// Add a request interceptor
defaultInstance.interceptors.request.use(
  (config) => {
    // Create a new CancelToken
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;

    // Store the source
    sources.push(source);

    // Retrieve the token from localStorage
    const token = global?.window?.localStorage.getItem("token") || "";
    const currentLocation = getLocalStorage("currentLocation");
    const currentRegister = getLocalStorage("currentRegister");

    // If a token is found, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // If a location is found, add it to the Location header
    if (currentLocation) {
      config.headers["location"] = currentLocation.id;
    }

    // If a register is found, add it to the Location header
    if (currentRegister) {
      config.headers["register"] = currentRegister.id;
    }

    return config;
  },
  (error) => {
    if (error.response && error.response.status === 400) {
      return error;
    } else if (error.response.status === 419 || error.response.status === 401) {
      global?.window?.localStorage.removeItem("user");
    } else if (error.response.status === 403) {
    }
  },
);


// Add a response interceptor
defaultInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    console.error("Response error:", error);

    // Example: You can handle specific status codes globally
    if (error.response) {

       if (error.response.status === 400) {
        console.log("Server error");
      }

      if (error.response.status === 401) {
        global?.window?.localStorage.removeItem("user");
        console.log("Unauthorized access - User logged out");
      } else if (error.response.status === 403) {
        console.log("Access denied");
      } else if (error.response.status === 404) {
        console.log("Resource not found");
      } else if (error.response.status === 500) {
        console.log("Server error");
      }
    }

    return error;
  }
);



export const cancelPendingRequests = () => {
  sources.forEach((source) => source.cancel());
  sources = [];
};

const getLocalStorage = (key: string) => {
  const localStorage = global?.window?.localStorage.getItem(key) || null;

  if (localStorage) return JSON.parse(localStorage);

  return null;
};

export default defaultInstance;
