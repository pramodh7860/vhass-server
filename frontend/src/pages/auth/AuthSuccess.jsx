import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
import { CourseData } from '../../context/CourseContext';
import Loading from '../../components/loading/Loading';

const AuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { fetchUser } = UserData();
  const { fetchMyCourse } = CourseData();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      // Store the token
      localStorage.setItem('token', token);
      
      // Fetch user data and course data
      const initializeUser = async () => {
        await fetchUser();
        await fetchMyCourse();
        navigate('/');
      };
      
      initializeUser();
    } else {
      // If no token, redirect to login
      navigate('/login');
    }
  }, [searchParams, navigate, fetchUser, fetchMyCourse]);

  return <Loading />;
};

export default AuthSuccess; 