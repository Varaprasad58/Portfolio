import React , {useRef} from 'react';
import "./Contact.css";
import Insta from "../../Images/Insta.png";
import Facebook from "../../Images/Facebook.png";
import Linkedin from "../../Images/Linked in.png";
import Github from "../../Images/Github.png";
import emailjs from "@emailjs/browser";
import {Button} from "antd";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs22rsg', 'template_2fku778', form.current, 'Z_GxNBXXxakhptLR5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<section className='contactSec' id='contactSec'>
    <span className='contactHeading'>Contact me</span>
    <span className='contactDescription'></span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your name' name='from_name'/>
        <input type='email' className='emailid' placeholder='Your email' name='from_email'/>
        <textarea name='message' className='message' rows="5" placeholder='Your message'/>
        <Button type="primary" value="send" className='msgBtn' style="color:grey"></Button>
      </form>
        <div className='socialmedia'>
          <a href='https://www.instagram.com/varaprasad_akireddy?igsh=MjB0NzZ2NTdpeGl2' target='blank'><img src={Insta} alt='Insta' className='imgInsta'/></a>
          <a href='https://www.facebook.com/profile.php?id=61550649075645' target='blank'><img src={Facebook} alt='Facebook' className='imgFacebook'/></a>
          <a href='https://www.linkedin.com/in/akireddy-kali-hanumanth-varaprasad-862460261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'><img src={Linkedin} alt='Linkedin' className='imgLinkedin'/></a>
          <a href='https://github.com/Varaprasad58' target='blank'><img src={Github} alt="Github" className='imgGithub'/></a>
        </div>
    </section>
  )
}

export default Contact
