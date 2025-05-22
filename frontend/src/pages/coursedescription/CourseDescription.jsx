import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { course, fetchCourse } = CourseData();
  const { isAuth, user } = UserData();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const handlePayment = async () => {
    if (!isAuth) {
      toast.error("Please login to purchase the course");
      navigate("/login", { state: { from: `/course/${params.id}` } });
      return;
    }

    setLoading(true);
    try {
      console.log('Initiating payment for course:', params.id);
      const { data } = await axios.post(
        `${server}/api/course/phonepe/checkout/${params.id}`,
        {},
        { 
          headers: { 
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token") 
          }
        }
      );

      console.log('Payment response:', data);

      if (data.checkoutPageUrl) {
        window.location.href = data.checkoutPageUrl;
      } else {
        throw new Error("Payment URL not received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      console.error("Error response:", error.response?.data);
      
      let errorMessage = "Payment failed";
      if (error.response?.data) {
        if (error.response.data.error) {
          errorMessage = error.response.data.error;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }
      
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (!course) return <div className="error-message">Course not found</div>;

  console.log('Course object in CourseDescription:', course);

  return (
    <div className="course-description">
      <div className="course-header">
        <h1>{course.title}</h1>
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-meta">
        <span>Instructor: {course.createdBy}</span>
        <span>Duration: {course.duration} hours</span>
        <span>₹{course.price ?? 'N/A'}</span>
      </div>

      <div className="course-content">
        <h2>About This Course</h2>
        <p>{course.description}</p>

        {course.syllabus && course.syllabus.length > 0 && (
          <div className="syllabus-section">
            <h2>Course Syllabus</h2>
            <ul>
              {course.syllabus.map((mod, idx) => (
                <li key={idx}>{mod}</li>
              ))}
            </ul>
          </div>
        )}

        {course.whoShouldAttend && course.whoShouldAttend.length > 0 && (
          <div className="who-should-attend-section">
            <h2>Who Should Attend</h2>
            <ul>
              {course.whoShouldAttend.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {course.prerequisites && course.prerequisites.length > 0 && (
          <div className="prerequisites-section">
            <h2>Prerequisites</h2>
            <ul>
              {course.prerequisites.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        
      </div>

      <div className="action-buttons">
        {isAuth && user?.subscription?.includes(course._id) ? (
          <button 
            onClick={() => navigate(`/course/study/${course._id}`)}
            className="study-btn"
          >
            Continue Learning
          </button>
        ) : (
          <button 
            onClick={handlePayment} 
            className="enroll-btn"
            disabled={loading}
          >
            {loading ? "Processing..." : isAuth ? "Enroll Now" : "Login to Enroll"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseDescription;