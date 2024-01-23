import './css/Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import myCV from './Files/OINDIL GOLDER CV.pdf'
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('✅Your message is sent');
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <div className="contact-section" id='contact'>
                <p>Contact</p>
                <div className="contact-main">
                    <div className="contact-card">
                        <p>Oindil Golder</p>
                        <a href="mailto:oindilgolder303@gmail.com">oindilgolder303@gmail.com</a>
                        <a href="tel:+917908775680">+917908775680</a>
                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/oindil-golder/" target='_blank' rel='noreferrer'><i className='bx bxl-linkedin-square'></i></a>
                            <a href="https://www.instagram.com/oindil.golder/" target='_blank' rel='noreferrer'><i className='bx bxl-instagram' ></i></a>
                            <a href="https://github.com/OINDIL" target='_blank' rel='noreferrer'><i className='bx bxl-github' ></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61555715216087" target='_blank' rel='noreferrer'><i className='bx bxl-facebook-circle'></i></a>
                            <a title='Download CV' href={myCV} target='_blank' rel='noreferrer'><i className='bx bx-download' ></i></a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <p>Leave a message</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message"/>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact