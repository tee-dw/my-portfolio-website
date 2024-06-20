import React from 'react'
import "./ContactMe.css";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {

    // const handleImg = () => {
    //     console.log('Image clicked');
    //     window.location.href = 'mailto:tboltz1808@gmail.com';
    // }

  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <a href="mailto:tboltz1808@gmail.com">
                    <ContactInfoCard
                        iconUrl="./assets/images/email_icon.png"
                        text="tboltz1808@gmail.com"     
                    />
                </a>

                <a href="https://github.com/tee-dw/get-a-therapist">
                    <ContactInfoCard
                        iconUrl="./assets/images/github_icon.png"
                        text="https://github.com/tee-dw/get-a-therapist"
                    />
                </a>
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe
