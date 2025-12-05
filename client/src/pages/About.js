import React from 'react';
import { Link } from 'react-router-dom'; // <--- Import Link here

const About = () => {

  const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
  return (
    <div>
      <h1>About Skillence</h1>
      
      <div className="about-section" data-aos="fade-up">
        <h2>Our Story & Credibility</h2>
        <p>
          <strong>Skillence</strong> is a leading software training and management services provider dedicated to nurturing talent and helping businesses get access to ready-to-deploy talent.
        </p>
        <p>
          We have partnered with <i>Scalemaster Adlam Private Limited (Hyderabad)</i> to deliver management services, such as manpower supply in <strong>Germany</strong>, <strong>Netherlands</strong>, <strong>Dubai</strong>, <strong>UK</strong> — and now expanding across <strong> India</strong>.
        </p>
      </div>

      <hr className="section-divider" />

      {/* --- Strategic Partner Section --- */}
      <div className="about-section highlight-partner" data-aos="fade-up">
        <h2>Strategic Partner</h2>
        
        <div className="partner-layout">
            <div className="partner-logo-box">
                <img 
                    src="/images/adlam-logo.png" 
                    alt="Scalemaster Adlam Pvt. Ltd. Logo" 
                    className="adlam-logo"
                />
            </div>

            <div className="partner-profile">
                <h3>Scalemaster Adlam Pvt. Ltd.</h3>
                <p className="partner-subtitle">Engineering & Manpower Consultants (Hyderabad)</p>
                
                <p>
                    A veteran in the manpower consultancy sector, Scalemaster Adlam brings decades of operational excellence and a robust network for deploying skilled professionals globally.
                </p>
                <p>
                    Their track record includes high-level manpower supply for major international projects, validated by clients such as <strong>WeVee</strong>. This partnership combines Skillence's emerging prospects with Scalemaster's established global deployment logistics.
                </p>
            </div>
        </div>
      </div>

      <hr className="section-divider" />
      
      <div className="about-section" data-aos="fade-up">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals with job-ready skills and enable businesses to access the right talent.
        </p>
      </div>

      <hr className="section-divider" />

      <div className="about-section" data-aos="fade-up">
        <h2>Our Vision</h2>
        <p>
          To be a trusted partner for career growth and workforce management in the IT and corporate ecosystem.
        </p>
      </div>
      
      <hr className="section-divider" />

      <div className="about-section" data-aos="fade-up">
        <h2>Why Choose Skillence?</h2>
        <ul className="styled-list">
          <li>Industry-oriented training</li>
          <li>Experienced trainers</li>
          <li>Strong industry partnership ecosystem</li>
          <li>Global manpower deployment experience</li>
        </ul>
      </div>

      <hr className="section-divider" />

      <div className="about-section founder-section" data-aos="fade-up">
        <h2>Meet the Founder</h2>
        <div className="founder-profile">
          <img 
            src="/images/founder-photo.jpg" 
            alt="Anindya Das Gupta, Founder of Skillence" 
            className="founder-photo"
          />
          <div className="founder-details">
            <h3>Anindya Das Gupta</h3>
            <p className="qualifications">B.Sc., MCA, MBA</p>
            <ul className="styled-list">
              <li>Running a Computer Software Training Institute for the last 32 years.</li>
              <li>L1-A working Visa Holder of America; worked for a Fortune 500 company in the USA as a Functional Director.</li>
              <li>Key roles in LIONS CLUB INTERNATIONAL (City of Glory): Service Chairperson & Director (2021-23), Treasurer (2023-24), and Secretary (2025-26).</li>
              <li>Member of "Protection for Democratic Human Rights Of India" and "National Human Rights Convener Of India".</li>
              <li>District Chairperson of “National Human Rights Society”.</li>
              <li>Associate Member of Press Club (South 24 Parganas) and Member of Indian Journalists’ Association (IJA) - Editorial manager in a small newspaper.</li>
              <li>Stood ninth in the sub-junior chess championship.</li>
              <li>Possesses an aptitude for vocal music.</li>
            </ul>

            {/* --- NEW BUTTON: Connect with Founder --- */}
            <Link to="/contact" onClick={handleLinkClick} className="founder-connect-btn">
                Connect with the Founder →
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;