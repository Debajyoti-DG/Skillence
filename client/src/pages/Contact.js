import React, { useState } from 'react';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({ name: '', email: '', jobRole: '', description: '' });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('');
  
  // UX IMPROVEMENT: State to show the name of the chosen file
  const [fileName, setFileName] = useState('No file chosen (PDF, 1MB Max)');

  // Handler for text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setFileName(file.name); // Show the actual file name
    } else {
      setResume(null);
      setFileName('No file chosen (PDF, 1MB Max)');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending application...');

    // Client-side validation
    if (!resume) {
      setStatus('Please select a resume file.');
      return;
    }
    if (resume.size > 1024 * 1024) { // 1MB size limit
      setStatus('Error: Resume file size cannot exceed 1MB.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('jobRole', formData.jobRole);
    data.append('description', formData.description);
    data.append('resume', resume);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      
      // FIX 1: The URL must use backticks (`) for the template literal to work.
      const response = await fetch(`${apiUrl}/api/apply`, {
        method: 'POST',
        body: data,
        // NOTE: Do NOT set Content-Type header manually for FormData.
        // The browser handles it automatically with the correct boundary.
      });

      const result = await response.json(); // Always parse the JSON response

      if (response.ok) {
        setStatus('Application sent successfully! Thank you.');
        setFormData({ name: '', email: '', jobRole: '', description: '' });
        setResume(null);
        setFileName('No file chosen (PDF, 1MB Max)');
        e.target.reset(); // Clear the file input
      } else {
        // Show the specific error message from the server
        setStatus(`Failed to send application: ${result.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('An error occurred. Please check your network and try again.');
    }
  };

  return (
    <div>
      <h1>Join Our Team</h1>
      <p>We'd love to hear from you. Apply for a job below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
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
          <label htmlFor="resume">Upload Resume</label>
          {/* UX IMPROVEMENT: A custom-styled file input */}
          <input 
            type="file" 
            id="resume" 
            name="resume" 
            accept="application/pdf" 
            onChange={handleFileChange} 
            required 
            className="file-input-hidden"
          />
          <label htmlFor="resume" className="file-input-label">{fileName}</label>
        </div>
        <button type="submit" className="submit-btn">Send Application</button>
      </form>
      {status && <p style={{ marginTop: '1.5rem' }}>{status}</p>}
    </div>
  );
};

export default Contact;