import React from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import "./workshopCard.css";

const WorkshopCard = ({ workshop }) => {
  const navigate = useNavigate();
  const { isAuth, user } = UserData();

  const deleteHandler = async (id) => {
    try {
      console.log('Delete Workshop - ID:', id);
      
      const response = await axios.delete(`${server}/api/workshop/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Delete Workshop - Response:', response);

      if (!response || !response.data) {
        throw new Error('No response data received');
      }

      toast.success(response.data.message || 'Workshop deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Delete Workshop - Full Error:', error);
      
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        
        toast.error(error.response.data.message || 'Failed to delete workshop');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        toast.error('No response from server');
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', error.message);
        toast.error('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="workshop-card">
      <img src={`${server}/${workshop.image}`} alt="" className="workshop-image" />
      <h3>{workshop.title}</h3>
      <p>Instructor: {workshop.createdBy}</p>
      <p>Date: {new Date(workshop.date).toLocaleDateString()}</p>
      <p>Time: {workshop.time}</p>
      <p>Location: {workshop.location}</p>
      <p>Duration: {workshop.duration} Hours</p>
      <p>Price: ₹{workshop.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.workshopSubscription.includes(workshop._id) ? (
                <button
                  onClick={() => navigate(`/workshop/details/${workshop._id}`)}
                  className="common-btn"
                >
                  View Details
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/workshop/${workshop._id}`)}
                  className="common-btn"
                >
                  Register Now
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/workshop/details/${workshop._id}`)}
              className="common-btn"
            >
              View Details
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate(`/workshop/${workshop._id}`)} className="common-btn">
          View Details
        </button>
      )}

      <br />

      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(workshop._id)}
          className="common-btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default WorkshopCard; 