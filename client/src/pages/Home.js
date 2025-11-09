import React from 'react';

const Home = () => {
return (
<div data-aos="fade-up">
<h1>Welcome to Skillence</h1>
<p>Your trusted partner for software training, corporate upskilling, and manpower services. We bridge the gap between companies and skilled professionals.</p>

{/* --- Key Highlights Section --- */}
<div className="key-highlights-container">
<div className="highlight-chip" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
Software & IT Training
</div>
<div className="highlight-chip" data-aos="fade-up" data-aos-duration="600" data-aos-delay="250">
Corporate Upskilling Programs
</div>
<div className="highlight-chip" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
Overseas Manpower Supply
</div>
<div className="highlight-chip" data-aos="fade-up" data-aos-duration="600" data-aos-delay="550">
Global Partnerships (Germany, Netherlands, Dubai, UK, India)
</div>
</div>
{/* --- End Key Highlights --- */}

</div>
);
};

export default Home;