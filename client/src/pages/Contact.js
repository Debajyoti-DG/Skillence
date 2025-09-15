import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', jobRole: '', description: '' });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('jobRole', formData.jobRole);
    data.append('description', formData.description);
    if (resume) data.append('resume', resume);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch('${apiUrl}/api/apply', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', jobRole: '', description: '' });
        setResume(null);
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Apply for a job below.</p>
      <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="jobRole">Job Role</label>
          <input type="text" id="jobRole" name="jobRole" value={formData.jobRole} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Why this job role?</label>
          <textarea id="description" name="description" rows="5" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume (PDF only)</label>
          <input type="file" id="resume" name="resume" accept="application/pdf" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="submit-btn">Send Application</button>
      </form>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
};

export default Contact;