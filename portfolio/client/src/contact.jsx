import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';

export default function Contact() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
firstName: "",
lastName: "",
contactNumber: "",
email: "",
message: "",
});

const handleChange = (event) => {
const { name, value } = event.target;
setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = (event) => {
event.preventDefault();
alert(
`Thank you for your message!
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.contactNumber}
Email: ${formData.email}
Message: ${formData.message}`
);
// Redirect to Home page
navigate('/');
};

return (
<div className="contact-container">
<h2 className="contact-title">Contact Me</h2>

<div className="contact-content-box">
<p className="contact-subtitle">Networking - Collaborations - Co-op</p>
<p className="contact-info"><strong>Email:</strong> jjoachi4@my.centennialcollege.ca</p>
<p className="contact-info"><strong>Phone:</strong> 647-809-4440</p>
<p className="contact-info"><strong>GitHub:</strong> <a href="https://github.com/Jallini-J" target="_blank" rel="noopener noreferrer" className="contact-link">https://github.com/Jallini-J</a></p>
<p className="contact-info"><strong>Location:</strong> Toronto, ON (EST)</p>
</div>

<div className="contact-form-box">
<p className="contact-subtitle">Send Me a Message</p>
<form onSubmit={handleSubmit} className="contact-form">
<div className="form-row">
<div className="form-group">
<label className="form-label" htmlFor="firstName">First Name:</label>
<input
type="text"
id="firstName"
className="form-input"
name="firstName"
value={formData.firstName}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label className="form-label" htmlFor="lastName">Last Name:</label>
<input
type="text"
id="lastName"
className="form-input"
name="lastName"
value={formData.lastName}
onChange={handleChange}
required
/>
</div>
</div>

<div className="form-group">
<label className="form-label" htmlFor="contactNumber">Contact Number:</label>
<input
type="tel"
id="contactNumber"
className="form-input"
name="contactNumber"
value={formData.contactNumber}
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<label className="form-label" htmlFor="email">Email Address:</label>
<input
type="email"
id="email"
className="form-input"
name="email"
value={formData.email}
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<label className="form-label" htmlFor="message">Message:</label>
<textarea
id="message"
className="form-textarea"
name="message"
value={formData.message}
onChange={handleChange}
rows="5"
required
/>
</div>

<button className="form-button" type="submit">
Send Message
</button>
</form>
</div>
</div>
);
}