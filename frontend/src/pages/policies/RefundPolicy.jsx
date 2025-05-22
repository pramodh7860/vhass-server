import React from 'react';
import './Policies.css';

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Refund Policy</h1>
        <p className="effective-date">Effective Date: March 15, 2024</p>

        <p className="intro">
          At VHASS SOFTWARES PRIVATE LIMITED, customer satisfaction is our top priority. However, due to the nature of digital services, refunds are subject to the following policy:
        </p>

        <section>
          <h2>Eligibility for Refund</h2>
          <ul>
            <li>Except When there is a duplicate or technical issue during the Transaction the the refund policy works else the refund is not possible.</li>
            <li>Services or software accessed, downloaded, or personalized are non-refundable.</li>
            <li>Refunds are only processed in case of duplicate transactions or technical failures from our side.</li>
          </ul>
        </section>

        <section>
          <h2>Refund Process</h2>
          <ul>
            <li>Email us at info@vhass.in with the order ID, transaction reference, and refund reason.</li>
            <li>Approved refunds will be credited within 7 working days to the original payment method.</li>
          </ul>
        </section>

        <section>
          <h2>Exceptions</h2>
          <p>No refunds are issued for trial versions, beta programs, or promotional offers.</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy; 