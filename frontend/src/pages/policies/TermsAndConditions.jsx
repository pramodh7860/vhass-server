import React from 'react';
import './Policies.css';

const TermsAndConditions = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Terms & Conditions</h1>
        <p className="effective-date">Effective Date: March 15, 2024</p>
        <p className="website">Website: www.vhass.in</p>

        <p className="intro">
          These Terms and Conditions ("Terms") constitute a legally binding agreement between you and VHASS SOFTWARES PRIVATE LIMITED ("VHASS", "we", "us", or "our"), a company registered under the Companies Act, 2013. By accessing or using our website, mobile application, or services, you agree to be bound by these Terms.
        </p>

        <section>
          <h2>1. Use of Our Services</h2>
          <p>You must be at least 18 years old to use our platform. You agree to provide accurate, current, and complete information and to use our services lawfully and ethically.</p>
        </section>

        <section>
          <h2>2. Intellectual Property</h2>
          <p>All logos, content, code, and software are proprietary to VHASS. Unauthorized use, reproduction, or distribution is prohibited.</p>
        </section>

        <section>
          <h2>3. User Conduct</h2>
          <p>You agree not to misuse our platform, attempt to hack systems, or engage in illegal activity while using our services.</p>
        </section>

        <section>
          <h2>4. Liability Disclaimer</h2>
          <p>We are not liable for damages arising from the use or inability to use our services. Services are provided "as-is" and "as-available."</p>
        </section>

        <section>
          <h2>5. Governing Law</h2>
          <p>These Terms are governed by the laws of India, with jurisdiction in Tamil Nadu.</p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>For any questions regarding these terms:</p>
          <p>Email: info@vhass.in</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions; 