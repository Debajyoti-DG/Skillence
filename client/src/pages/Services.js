import React from 'react';

const Services = () => {
  return (
    <div data-aos="fade-up">
      <h1>Our Services</h1>
      <p>
        We provide a comprehensive range of services designed to bridge the gap between education and industry, empowering both individuals and corporations in Kolkata and beyond.
      </p>
      
      

      <div className="services-container" data-aos="fade-up">
        
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Software Training</h3>
          <p>Detailing our offerings clearly so visitors understand your value.</p>
          <ul className="service-list">
            <li>Beginner to advanced IT courses (Python, Java, Data Analytics, AI, Cloud, etc.)</li>
            <li>Customized corporate training modules to upskill your workforce.</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">👥</div>
          <h3>Manpower Services</h3>
          <p>Connecting talent with opportunity is at the heart of what we do.</p>
          <ul className="service-list">
            <li>Sourcing skilled professionals for your company projects.</li>
            <li>Providing dedicated workforce support for short-term or long-term needs.</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">📈</div>
          <h3>Management Services Provider</h3>
          <p>Streamlining your training and development initiatives for maximum impact.</p>
          <ul className="service-list">
            <li>Organizing and managing training programs for companies.</li>
            <li>Offering end-to-end skill development planning and execution.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Services;