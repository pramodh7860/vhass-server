import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WorkshopData } from "../../context/WorkshopContext";
import { UserData } from "../../context/UserContext";
import { server } from "../../main";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./workshopdescription.css";

const WorkshopDescription = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { workshop, fetchWorkshop } = WorkshopData();
  const { isAuth, user } = UserData();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWorkshop(params.id);
  }, []);

  const buyHandler = async () => {
    if (!isAuth) {
      toast.error("Please login to register for the workshop");
      navigate("/login", { state: { from: `/workshop/${params.id}` } });
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/workshop/phonepe/checkout/${params.id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      // Redirect to PhonePe checkout page using the token and merchantId
      window.location.href = data.checkoutPageUrl;
    } catch (error) {
      console.error("Workshop payment error:", error, error.response?.data);
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

  if (!workshop) return <div className="error-message">Workshop not found</div>;

  return (
    <div className="workshop-description">
      <div className="workshop-header">
        <h1>{workshop.title}</h1>
        <p className="workshop-tagline">{workshop.description}</p>
        <img src={`${server}/${workshop.image}`} alt={workshop.title} />
      </div>

      <div className="workshop-meta">
        <span>Instructor: {workshop.createdBy}</span>
        <span>Date: {new Date(workshop.date).toLocaleDateString()}</span>
        <span>Time: {workshop.time}</span>
        <span>Location: {workshop.location}</span>
        <span>Duration: {workshop.duration} hours</span>
        <span>Price: ₹{workshop.price}</span>
      </div>

      <div className="workshop-content">
        <h2>About This Workshop</h2>
        <p>{workshop.description}</p>

        {workshop.syllabus && workshop.syllabus.length > 0 && (
          <div className="syllabus-section">
            <h2>Workshop Syllabus</h2>
            <ul>
              {workshop.syllabus.map((mod, idx) => (
                <li key={idx}>{mod}</li>
              ))}
            </ul>
          </div>
        )}

        {workshop.whoShouldAttend && workshop.whoShouldAttend.length > 0 && (
          <div className="who-should-attend-section">
            <h2>Who Should Attend</h2>
            <ul>
              {workshop.whoShouldAttend.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {workshop.prerequisites && workshop.prerequisites.length > 0 && (
          <div className="prerequisites-section">
            <h2>Prerequisites</h2>
            <ul>
              {workshop.prerequisites.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="action-buttons">
          {isAuth && user?.workshopSubscription?.includes(workshop._id) ? (
            <button 
              onClick={() => navigate(`/workshop/details/${workshop._id}`)}
              className="study-btn"
            >
              View Workshop Details
            </button>
          ) : (
            <button 
              onClick={buyHandler} 
              className="enroll-btn"
              disabled={loading}
            >
              {loading ? "Processing..." : isAuth ? "Register Now" : "Login to Register"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkshopDescription; 