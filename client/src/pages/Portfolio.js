import React from 'react';

const Portfolio = () => {
  return (
    <div data-aos="fade-up">
      <h1>Our Future Focus</h1>
      
      <div className="portfolio-section" data-aos="fade-up">
        <h2>What We Aim to Build</h2>
        <p>
          Our journey has just begun. We are working diligently towards building a portfolio that reflects:
        </p>
        <ul className="styled-list">
          <li>Successful corporate training programs that demonstrably enhance employee skills.</li>
          <li>A strong track record of skilled professionals placed across diverse industries.</li>
          <li>Long-term, collaborative partnerships with growing companies in Kolkata and beyond.</li>
        </ul>
      </div>

      <div className="portfolio-section" data-aos="fade-up">
        <h2>What's on the Horizon</h2>
        <p>Instead of showing what we’ve done, here is what we’re preparing to deliver.</p>
        
        
        
        <div className="coming-soon-container">
          
          <div className="coming-soon-card">
            <div className="coming-soon-banner">Coming Soon</div>
            <h3>Specialized Courses</h3>
            <p>New, in-depth courses covering the latest technologies and software development practices are currently under development.</p>
          </div>
          
          <div className="coming-soon-card">
            <div className="coming-soon-banner">Coming Soon</div>
            <h3>Interactive Workshops</h3>
            <p>We are planning a series of hands-on workshops designed to provide practical, real-world skills in a collaborative environment.</p>
          </div>
          
          <div className="coming-soon-card">
            <div className="coming-soon-banner">Coming Soon</div>
            <h3>Corporate Collaborations</h3>
            <p>Exciting new partnerships with leading companies are in progress to create tailored training and placement programs.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;