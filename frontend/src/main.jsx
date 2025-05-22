import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";
import { WorkshopContextProvider } from "./context/WorkshopContext.jsx";

// Set the server URL from environment variable or fallback to default
export const server = import.meta.env.VITE_BACKEND_URL || "https://vhass-server-1.onrender.com";

// Log the server URL for debugging
console.log('Server URL:', server);

// Configure axios globally
axios.defaults.baseURL = server;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Add response interceptor for debugging
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
      headers: error.config?.headers
    });
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <WorkshopContextProvider>
          <App />
        </WorkshopContextProvider>
      </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
