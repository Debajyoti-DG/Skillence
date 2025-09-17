import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Skillence</h1>
      
      <div className="about-section">
        <h2>Our Story & Credibility</h2>
        <p>
          <strong>Skillence</strong> is a leading software training and management services provider dedicated to nurturing talent and supporting companies with skilled manpower.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals with job-ready skills and enable businesses to access the right talent.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a trusted partner for career growth and workforce management in the IT and corporate ecosystem.
        </p>
      </div>
      
      <div className="about-section">
        <h2>Why Choose Skillence?</h2>
        <ul className="styled-list">
          <li>Industry-aligned courses</li>
          <li>Experienced trainers</li>
          <li>Tailored manpower supply</li>
          <li>Corporate training programs</li>
        </ul>
      </div>

      <div className="about-section founder-section">
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
              <li>Key roles in LIONS CLUB INTERNATIONAL (City of Glory): Service Chairperson & Director (2021-23), Treasurer (2023-24), and Secretary (2024-25).</li>
              <li>Member of "Protection for Democratic Human Rights Of India" and "National Human Rights Convener Of India".</li>
              <li>District Chairperson of “National Human Rights Society”.</li>
              <li>Associate Member of Press Club (South 24 Parganas) and Member of Indian Journalists’ Association (IJA) - Editorial manager in a small newspaper.</li>
              <li>Stood ninth in the sub-junior chess championship.</li>
              <li>Possesses an aptitude for vocal music.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;