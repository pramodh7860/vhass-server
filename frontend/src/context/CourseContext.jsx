import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [mycourse, setMyCourse] = useState([]);

  async function fetchCourses() {
    try {
      const { data } = await axios.get(`${server}/api/course/all`, {
        withCredentials: true,
        headers: {
          'token': localStorage.getItem('token')
        }
      });

      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCourse(id) {
    try {
      const { data } = await axios.get(`${server}/api/course/${id}`, {
        withCredentials: true,
        headers: {
          'token': localStorage.getItem('token')
        }
      });
      setCourse(data.course || null);
    } catch (error) {
      console.log(error);
      setCourse(null);
    }
  }

  async function fetchMyCourse() {
    try {
      const { data } = await axios.get(`${server}/api/mycourse`, {
        withCredentials: true,
        headers: {
          'token': localStorage.getItem('token')
        }
      });

      setMyCourse(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  async function createCourse(courseData) {
    try {
      const formData = new FormData();
      Object.keys(courseData).forEach(key => {
        if (courseData[key] !== undefined) {
          formData.append(key, courseData[key]);
        }
      });

      const { data } = await axios.post(`${server}/api/admin/course/new`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      fetchCourses(); // Refresh courses list
      return data;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  }

  async function deleteCourse(courseId) {
    try {
      const { data } = await axios.delete(`${server}/api/course/${courseId}`, {
        withCredentials: true
      });

      fetchCourses(); // Refresh courses list
      return data;
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  }

  async function addLecture(courseId, lectureData) {
    try {
      const formData = new FormData();
      Object.keys(lectureData).forEach(key => {
        if (lectureData[key] !== undefined) {
          formData.append(key, lectureData[key]);
        }
      });

      const { data } = await axios.post(`${server}/api/admin/course/${courseId}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return data;
    } catch (error) {
      console.error('Error adding lecture:', error);
      throw error;
    }
  }

  async function deleteLecture(lectureId) {
    try {
      const { data } = await axios.delete(`${server}/api/admin/lecture/${lectureId}`, {
        withCredentials: true
      });

      return data;
    } catch (error) {
      console.error('Error deleting lecture:', error);
      throw error;
    }
  }

  useEffect(() => {
    fetchCourses();
    fetchMyCourse();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        fetchCourses,
        fetchCourse,
        course,
        mycourse,
        fetchMyCourse,
        createCourse,
        deleteCourse,
        addLecture,
        deleteLecture
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);
