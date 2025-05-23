import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";
import { defaultProfile } from '../assets';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loginUser(email, password, navigate, fetchMyCourse) {
    setBtnLoading(true);
    try {
      console.log('Attempting login...');
      const response = await fetch('https://vhass-server-1.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      console.log('Login response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Login response:', data);

      if (data.token) {
        console.log('Token received, storing in localStorage');
        localStorage.setItem('token', data.token);
      } else {
        console.error('No token in response');
      }

      toast.success(data.message);
      await fetchUser();
      setBtnLoading(false);
      navigate("/");
      if (fetchMyCourse) {
        fetchMyCourse();
      }
    } catch (error) {
      console.error('Login error:', error);
      setBtnLoading(false);
      setIsAuth(false);
      setUser(null);
      toast.error(error.message || "Login failed");
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
      console.log('Fetching user...');
      const token = localStorage.getItem('token');
      console.log('Token from localStorage:', token ? 'exists' : 'not found');
      
      if (!token) {
        console.log('No token found, setting auth state to false');
        setIsAuth(false);
        setUser(null);
        setLoading(false);
        return;
      }

      const response = await fetch('https://vhass-server-1.onrender.com/api/user/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('User data received:', data);
      
      if (data.user) {
        console.log('Setting auth state to true');
        const formattedUser = {
          ...data.user,
          profileImage: data.user.profileImage 
            ? `https://vhass-server-1.onrender.com/uploads/${data.user.profileImage}`
            : defaultProfile
        };
        setIsAuth(true);
        setUser(formattedUser);
      } else {
        console.log('No user data in response');
        setIsAuth(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      if (error.message.includes('401')) {
        console.log('401 error, clearing token and auth state');
        localStorage.removeItem('token');
        setIsAuth(false);
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  }

  async function logoutUser() {
    try {
      console.log('Logging out...');
      const token = localStorage.getItem('token');
      
      const response = await fetch('https://vhass-server-1.onrender.com/api/user/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      localStorage.removeItem('token');
      setUser(null);
      setIsAuth(false);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem('token');
      setUser(null);
      setIsAuth(false);
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
