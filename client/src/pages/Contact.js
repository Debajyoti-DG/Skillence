import React, { useState } from 'react';

const Contact = () => {
  // State for form fields
  // Note: jobRole starts empty. It gets filled when the user selects the 3rd dropdown.
  const [formData, setFormData] = useState({ name: '', email: '', jobRole: '', description: '' });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('No file chosen (PDF, 1MB Max)');

  // --- NEW STATE FOR CASCADING DROPDOWNS ---
  const [selectedDomain, setSelectedDomain] = useState(''); // Tech vs Non-Tech
  const [selectedCategory, setSelectedCategory] = useState(''); // AI, Finance, etc.

  // Handler for text inputs (Name, Email, Description)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // --- HANDLERS FOR CASCADING DROPDOWNS ---

  // Step 1: Handle Domain Change (Tech / Non-Tech)
  const handleDomainChange = (e) => {
    const domain = e.target.value;
    setSelectedDomain(domain);
    setSelectedCategory(''); // Reset Category
    setFormData(prev => ({ ...prev, jobRole: '' })); // Reset Role
  };

  // Step 2: Handle Category Change (AI / Web Dev / Finance etc)
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setFormData(prev => ({ ...prev, jobRole: '' })); // Reset Role
  };

  // Step 3: Handle Final Role Change
  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormData(prev => ({ ...prev, jobRole: role }));
  };

  // Handler for file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setFileName(file.name);
    } else {
      setResume(null);
      setFileName('No file chosen (PDF, 1MB Max)');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending application...');

    // Client-side validation
    if (!resume) {
      setStatus('Please select a resume file.');
      setLoading(false);
      return;
    }
    if (resume.size > 1024 * 1024) { 
      setStatus('Error: Resume file size cannot exceed 1MB.');
      setLoading(false);
      return;
    }
    // Validation for Role
    if (!formData.jobRole) {
        setStatus('Please select a specific Job Role.');
        setLoading(false);
        return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('jobRole', formData.jobRole); // This now holds the final selected role
    data.append('description', formData.description);
    data.append('resume', resume);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      
      const response = await fetch(`${apiUrl}/api/apply`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Application sent successfully! Thank you.');
        // Reset ALL form states
        setFormData({ name: '', email: '', jobRole: '', description: '' });
        setSelectedDomain('');
        setSelectedCategory('');
        setResume(null);
        setFileName('No file chosen (PDF, 1MB Max)');
        e.target.reset();
      } else {
        setStatus(`Failed to send application: ${result.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('An error occurred. Please check your network and try again.');
    }
    setLoading(false);
  };

  return (
    <div data-aos="fade-up">
      <h1>Join Our Team</h1>
      <p>We'd love to hear from you. Select your role and apply below.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* --- CASCADING DROPDOWNS FOR JOB ROLE --- */}
        
        {/* 1. Domain Select */}
        <div className="form-group">
            <label htmlFor="domain">Job Domain</label>
            <select id="domain" value={selectedDomain} onChange={handleDomainChange} required>
                <option value="">-- Select Domain --</option>
                {Object.keys(JOB_ROLES_DATA).map((domain) => (
                    <option key={domain} value={domain}>{domain}</option>
                ))}
            </select>
        </div>

        {/* 2. Category Select (Appears after Domain is selected) */}
        {selectedDomain && (
            <div className="form-group" data-aos="fade-in">
                <label htmlFor="category">Job Category</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange} required>
                    <option value="">-- Select Category --</option>
                    {Object.keys(JOB_ROLES_DATA[selectedDomain]).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        )}

        {/* 3. Specific Role Select (Appears after Category is selected) */}
        {selectedCategory && (
            <div className="form-group" data-aos="fade-in">
                <label htmlFor="jobRole">Specific Role</label>
                <select id="jobRole" name="jobRole" value={formData.jobRole} onChange={handleRoleChange} required>
                    <option value="">-- Select Your Role --</option>
                    {JOB_ROLES_DATA[selectedDomain][selectedCategory].map((role) => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
            </div>
        )}

        {/* --- END CASCADING DROPDOWNS --- */}

        <div className="form-group">
          <label htmlFor="description">Why this job role?</label>
          <textarea id="description" name="description" rows="5" value={formData.description} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
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

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Send Application'}
        </button>
      </form>
      {status && <p style={{ marginTop: '1.5rem' }}>{status}</p>}
    </div>
  );
};

export default Contact;

// --- DATA STRUCTURE ---
const JOB_ROLES_DATA = {
    "Tech Roles": {
        "Artificial Intelligence & Machine Learning": [
            "Machine Learning Engineer", "Data Scientist", "AI Researcher", "Deep Learning Engineer", 
            "NLP Engineer", "Computer Vision Engineer", "AI Product Manager", "Data Analyst", 
            "AI Ethics Specialist", "Robotics AI Engineer"
        ],
        "Software Development": [
            "Frontend Developer", "Backend Developer", "Full-Stack Developer", "Mobile App Developer", 
            "Systems Programmer", "Embedded Software Engineer", "Application Developer", 
            "Desktop Software Engineer", "Game Developer", "Software Architect"
        ],
        "Cloud & DevOps": [
            "Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Architect", 
            "Kubernetes Administrator", "Platform Engineer", "AWS/GCP/Azure Specialist", 
            "Infrastructure Engineer", "CI/CD Engineer", "Cloud Security Engineer"
        ],
        "Cybersecurity": [
            "Cybersecurity Analyst", "Ethical Hacker", "Penetration Tester", "Security Architect", 
            "SOC Analyst", "Network Security Engineer", "Information Security Manager", 
            "Malware Analyst", "Cyber Forensics Specialist", "Cryptographer"
        ],
        "Data & Database": [
            "Data Engineer", "Big Data Developer", "Database Administrator (DBA)", "Data Warehouse Engineer", 
            "Business Intelligence Analyst", "Data Modeller", "ETL Developer", "SQL Developer", 
            "Data Governance Specialist", "Big Data Architect"
        ],
        "Networking & IT Infrastructure": [
            "Network Engineer", "System Administrator", "IT Support Specialist", "Cloud Support Technician", 
            "Network Architect", "Telecom Engineer", "Storage Engineer", "IT Infrastructure Manager", 
            "NOC Engineer", "Network Operations Manager"
        ],
        "Web & App Development": [
            "React Developer", "Angular Developer", "Vue Developer", "WordPress Developer", 
            "Web Designer", "UI Developer", "Backend Node/Python/PHP Developer", 
            "Hybrid Mobile Developer (Flutter/React Native)", "Web Accessibility Specialist", "API Developer"
        ],
        "Product, Business & Management Tech": [
            "Product Manager", "Technical Program Manager", "Agile Scrum Master", "Business Analyst", 
            "Product Owner", "Technology Consultant", "Pre-Sales Engineer", "Solutions Consultant", 
            "Delivery Manager", "IT Project Manager"
        ],
        "Hardware, Electronics & Embedded": [
            "Embedded Systems Engineer", "IoT Engineer", "PCB Designer", "VLSI Engineer", 
            "FPGA Developer", "Microcontroller Programmer", "Hardware Design Engineer", 
            "Firmware Developer", "Automotive Electronics Engineer", "Semiconductor Engineer"
        ],
        "Emerging/Trending Tech": [
            "Blockchain Developer", "AR/VR Developer", "Quantum Computing Researcher", "AI Automation Engineer", 
            "Drone Technology Engineer", "Prompt Engineer", "Metaverse Developer", 
            "Generative AI Engineer", "Chatbot Developer", "Digital Twin Engineer"
        ]
    },
    "Non-Tech Roles": {
        "Business & Management": [
            "HR Manager", "Marketing Manager", "Sales Executive", "Business Development Manager", 
            "Operations Manager", "Supply Chain Manager", "Procurement Officer", "Management Consultant", 
            "Customer Relations Manager", "Entrepreneur/Startup Founder"
        ],
        "Finance & Accounting": [
            "Chartered Accountant", "Financial Analyst", "Investment Banker", "Stock Market Trader", 
            "Tax Consultant", "Auditor", "Insurance Advisor", "Bank Manager", "Wealth Manager", 
            "Credit Risk Analyst"
        ],
        "Media, Design & Creative": [
            "Graphic Designer", "Video Editor", "Content Writer", "Social Media Manager", 
            "UX/UI Designer (Semi-tech)", "Film Director", "Animator", "Fashion Designer", 
            "Photographer", "Interior Designer"
        ],
        "Healthcare & Core Science": [
            "Doctor", "Nurse", "Pharmacist", "Laboratory Technician", "Physiotherapist", 
            "Nutritionist", "Dentist", "Medical Researcher", "Clinical Psychologist", 
            "Biomedical Technician"
        ],
        "Education & Public Services": [
            "School Teacher", "College Professor", "Career Counsellor", "Civil Service Officer", 
            "Public Policy Analyst", "NGO Coordinator", "Research Scholar", "Librarian", 
            "Training & Development Specialist", "Language Instructor"
        ]
    }
};