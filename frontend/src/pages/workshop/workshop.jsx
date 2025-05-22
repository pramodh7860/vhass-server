import React from 'react';
import './workshop.css';
import { WorkshopData } from '../../context/WorkshopContext';
import WorkshopCard from '../../components/workshopcard/WorkshopCard';

const WorkshopsPage = () => {
  const { workshops } = WorkshopData();

  return (
    <div className="workshops-page">
      {/* Hero Section */}
      <section className="workshop-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Cybersecurity Workshops & Seminars</h1>
            <p>Hands-on training sessions and expert-led seminars to boost your cybersecurity skills</p>
            <a href="#upcoming-events" className="btn-primary">View Upcoming Events</a>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="featured-workshops">
        <div className="container">
          <div className="section-header">
            <h2>Featured Workshops</h2>
            <p>Interactive sessions with industry professionals to gain practical cybersecurity knowledge</p>
          </div>
          
          <div className="workshop-container">
            {workshops && workshops.length > 0 ? (
              workshops.map((e) => <WorkshopCard key={e._id} workshop={e} />)
            ) : (
              <p>No Workshops Yet!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;