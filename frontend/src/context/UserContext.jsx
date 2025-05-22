import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loginUser(email, password, navigate, fetchMyCourse) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      }, { 
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      toast.success(data.message);
      await fetchUser();
      setBtnLoading(false);
      navigate("/");
      fetchMyCourse();
    } catch (error) {
      setBtnLoading(false);
      setIsAuth(false);
      setUser([]);
      toast.error(error.response?.data?.message || "Login failed");
    }
  }

  async function registerUser(name, email, password, navigate) {
    console.log("Starting registration process");
    setBtnLoading(true);
    try {
      console.log("Sending registration request to server");
      const { data } = await axios.post(`${server}/api/user/register`, {
        name,
        email,
        password,
      });

      console.log("Registration response received:", data);
      toast.success(data.message);
      localStorage.setItem("activationToken", data.activationToken);
      setBtnLoading(false);
      console.log("Navigating to verify page");
      navigate("/verify");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      setBtnLoading(false);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  }

  async function verifyOtp(otp, navigate) {
    setBtnLoading(true);
    const activationToken = localStorage.getItem("activationToken");
    try {
      const { data } = await axios.post(`${server}/api/user/verify`, {
        otp,
        activationToken,
      });

      toast.success(data.message);
      navigate("/login");
      localStorage.clear();
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await axios.get(`${server}/api/user/me`, { withCredentials: true });
      setIsAuth(true);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function logoutUser() {
    try {
      await axios.post(`${server}/api/user/logout`, {}, { 
        withCredentials: true 
      });
      setUser([]);
      setIsAuth(false);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      setUser([]);
      setIsAuth(false);
    }
  }

  async function loginUser(email, password, navigate, fetchMyCourse) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      }, { 
        withCredentials: true,  // Important for cookie-based auth
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Store token in localStorage
      localStorage.setItem('token', data.token);
      
      // Set token in Axios default headers for future requests
      axios.defaults.headers.common['token'] = data.token;
  
      toast.success(data.message);
      await fetchUser();
      setBtnLoading(false);
      navigate("/");
      fetchMyCourse();
    } catch (error) {
      setBtnLoading(false);
      setIsAuth(false);
      setUser([]);
      toast.error(error.response?.data?.message || "Login failed");
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setIsAuth,
        isAuth,
        loginUser,
        logoutUser,
        btnLoading,
        loading,
        registerUser,
        verifyOtp,
        fetchUser,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
