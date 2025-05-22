import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const WorkshopContext = createContext();

export const WorkshopContextProvider = ({ children }) => {
  const [workshops, setWorkshops] = useState([]);
  const [workshop, setWorkshop] = useState([]);
  const [myworkshop, setMyWorkshop] = useState([]);

  async function fetchWorkshops() {
    try {
      const { data } = await axios.get(`${server}/api/workshop/all`, {
        withCredentials: true
      });
      setWorkshops(data.workshops);
    } catch (error) {
      console.error('Error fetching workshops:', error);
      console.error('Error details:', {
        response: error.response?.data,
        status: error.response?.status
      });
    }
  }

  async function fetchWorkshop(id) {
    try {
      const { data } = await axios.get(`${server}/api/workshop/${id}`, {
        withCredentials: true
      });
      setWorkshop(data.workshop);
    } catch (error) {
      console.error('Error fetching workshop:', error);
      console.error('Error details:', {
        response: error.response?.data,
        status: error.response?.status
      });
    }
  }

  async function fetchMyWorkshop() {
    try {
      const { data } = await axios.get(`${server}/api/myworkshop`, {
        withCredentials: true
      });
      setMyWorkshop(data.workshops);
    } catch (error) {
      console.error('Error fetching my workshops:', error);
      console.error('Error details:', {
        response: error.response?.data,
        status: error.response?.status
      });
    }
  }

  useEffect(() => {
    fetchWorkshops();
    fetchMyWorkshop();
  }, []);

  return (
    <WorkshopContext.Provider
      value={{
        workshops,
        fetchWorkshops,
        fetchWorkshop,
        workshop,
        myworkshop,
        fetchMyWorkshop,
      }}
    >
      {children}
    </WorkshopContext.Provider>
  );
};

export const WorkshopData = () => useContext(WorkshopContext); 