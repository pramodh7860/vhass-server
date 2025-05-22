import React from 'react';
import './Policies.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: March 15, 2024</p>

        <p className="intro">
          This Privacy Policy describes how VHASS SOFTWARES PRIVATE LIMITED collects, uses, and protects user data.
        </p>

        <section>
          <h2>Information Collected</h2>
          <div className="subsection">
            <h3>Personal Data</h3>
            <p>Name, email address, contact number, location (if consented).</p>
          </div>
          <div className="subsection">
            <h3>Technical Data</h3>
            <p>IP address, device info, browser type, access times.</p>
          </div>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To deliver and maintain services.</li>
            <li>For customer support and security.</li>
            <li>To send transactional or promotional updates (only with consent).</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We use AES encryption and SSL certificates to secure your data. Regular audits and access control are enforced.</p>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <p>We do not sell or rent your personal data. We may share data with trusted partners strictly for service delivery under NDAs.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Request data access, correction, or deletion anytime by writing to info@vhass.in.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 