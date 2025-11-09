import React from 'react';

const Portfolio = () => {
return (
  <div data-aos="fade-up">
    {/* New Success Stories Section */}
    <div className="success-stories-section" data-aos="fade-up">
    <h2>Success Stories</h2>
    <p className="tagline">Real Partnership. Real Deployment. Real Impact.</p>
      <p className="partnership-highlight">
        Global Manpower Deployment — with Scalemaster Adlam Pvt. Ltd. (Hyderabad)
      </p>
    <p>
        In collaboration with Scalemaster Adlam Private Limited, Skillence has successfully contributed to manpower deployments across Germany, Netherlands, Dubai, United Kingdom and India — supporting companies with skilled workforce requirements on an international scale.
    </p>
    <p>
        This partnership marks a strong validation of our capabilities in sourcing, preparing and supplying reliable manpower for global corporate environments.
    </p>
    <div className="country-flags-container">
      <img src="/images/flags/germany.png" alt="Germany Flag" className="country-flag" title="Germany" />
      <img src="/images/flags/netherlands.png" alt="Netherlands Flag" className="country-flag" title="Netherlands" />
      <img src="/images/flags/dubai.png" alt="Dubai Flag" className="country-flag" title="Dubai" /> {/* Assuming a Dubai specific flag or UAE */}
      <img src="/images/flags/uk.png" alt="United Kingdom Flag" className="country-flag" title="United Kingdom" />
      <img src="/images/flags/india.png" alt="India Flag" className="country-flag" title="India" />
    </div>
  </div>
  {/* End New Success Stories Section */}

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