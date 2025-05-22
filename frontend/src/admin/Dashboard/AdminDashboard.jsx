import React from "react";
import Layout from "../Utils/Layout";
import "./dashboard.css";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>0</p>
          </div>
          <div className="stat-card">
            <h3>Total Courses</h3>
            <p>0</p>
          </div>
          <div className="stat-card">
            <h3>Total Workshops</h3>
            <p>0</p>
          </div>
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p>₹0</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
