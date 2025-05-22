import React from "react";
import "./Dashboard.css";
import { CourseData } from "../../context/CourseContext";
import { WorkshopData } from "../../context/WorkshopContext";
import CourseCard from "../../components/coursecard/CourseCard";
import WorkshopCard from "../../components/workshopcard/WorkshopCard";

const Dashboard = () => {
  const { mycourse } = CourseData();
  const { myworkshop } = WorkshopData();

  return (
    <div className="student-dashboard">
      <div className="dashboard-section">
        <h2>Enrolled Courses</h2>
        <div className="dashboard-content">
          {mycourse && mycourse.length > 0 ? (
            mycourse.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <p>No courses enrolled yet</p>
          )}
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Registered Workshops</h2>
        <div className="dashboard-content">
          {myworkshop && myworkshop.length > 0 ? (
            myworkshop.map((e) => <WorkshopCard key={e._id} workshop={e} />)
          ) : (
            <p>No workshops registered yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 