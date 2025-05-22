import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WorkshopData } from "../../context/WorkshopContext";
import { server } from "../../main";
import "./workshopdetails.css";

const WorkshopDetails = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { workshop, fetchWorkshop } = WorkshopData();

  useEffect(() => {
    fetchWorkshop(params.id);
  }, []);

  if (user && user.role !== "admin" && !user.workshopSubscription.includes(params.id))
    return navigate("/");

  return (
    <div className="workshop-details">
      <div className="workshop-header">
        <h1>{workshop.title}</h1>
        <p className="workshop-tagline">
          {workshop.description}
        </p>
        <img src={`${server}/${workshop.image}`} alt={workshop.title} />
      </div>

      <div className="workshop-meta">
        <span>Instructor: {workshop.createdBy}</span>
        <span>Date: {new Date(workshop.date).toLocaleDateString()}</span>
        <span>Time: {workshop.time}</span>
        <span>Location: {workshop.location}</span>
        <span>Duration: {workshop.duration} hours</span>
      </div>

      <div className="workshop-content">
        <h2>Workshop Details</h2>
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

        <div className="workshop-instructions">
          <h2>Important Instructions</h2>
          <ul>
            <li>Please arrive 15 minutes before the workshop starts</li>
            <li>Bring your laptop and necessary materials</li>
            <li>Make sure you have all prerequisites installed</li>
            <li>Contact the instructor if you have any questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails; 