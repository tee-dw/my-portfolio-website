import React from 'react';
import Swal from 'sweetalert2'
import "./ContactForm.css"

const ContactForm = () => {

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "650e8d33-9f8e-4bbe-bc65-9178b3d19995");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
        });
      } else {
        console.log("Error", data);
      }

  };

  return (
    <div className='contact-form-content' id="contact">
        <form onSubmit={handleSubmit}>
            <div className='name-container'>
                <input type="text" name="firstname" placeholder='First Name' required />
                <input type="text" name="lastname" placeholder='Last Name' required />
            </div>
            <input type="text" name="email" placeholder='Email' required />
            <textarea type="text" name="message" placeholder='Message' rows={4} required></textarea>
            <button type='submit' name='send-email'>Send</button>
        </form>

    </div>
  )
}

export default ContactForm