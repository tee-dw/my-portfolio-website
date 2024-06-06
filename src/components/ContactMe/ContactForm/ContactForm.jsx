import React, { useState } from 'react';
import "./ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Send form data to backend server
      fetch('http://localhost:5000/api/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => {
          if (response.ok) {
              // Handle successful form submission
              console.log('Email sent successfully');
          } else {
              // Handle form submission error
              console.error('Failed to send email');
          }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className='contact-form-content' id="contact">
        <form action="" onSubmit={handleSubmit}>
            <div className='name-container'>
                <input type="text" name="firstname" placeholder='First Name' value={formData.firstname} onChange={handleChange} required />
                <input type="text" name="lastname" placeholder='Last Name' value={formData.lastname} onChange={handleChange} required />
            </div>
            <input type="text" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
            <textarea type="text" name="message" placeholder='Message' rows={3} value={formData.message} onChange={handleChange} required></textarea>
            <button type='submit' name='send-email'>Send</button>
        </form>

    </div>
  )
}

export default ContactForm