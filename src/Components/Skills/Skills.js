import React from 'react';
import './Skills.css';
import appDevelopment from "../../Images/App Development.png";
import webDevelopment from "../../Images/Web Development.png";


const Skills = () => {
  return (
    <section className='skillSection'>
        <div className='skills'>
            <span className='skillTitle'>What can I do</span>
            <span className='skillDesc'></span>
        </div>
        <div className='mySkills'>
        <div className='skillSet'>
            <img src={webDevelopment} alt='Web Development' className='webDevelopmentImg'/>
            <div className='skillText'>
                <h1>Web Development</h1>
                <p>I possess a robust skill set in web development, specializing in HTML, CSS, and React.js. With a keen understanding of front-end technologies, I create visually appealing and responsive user interfaces. My proficiency in HTML ensures the structural integrity of web pages, while CSS expertise allows me to style them with a modern and user-friendly design. Leveraging the power of React.js, I excel in building dynamic and interactive web applications, providing seamless user experiences. Passionate about crafting elegant and efficient solutions, my expertise lies at the intersection of design and functionality, making me a valuable asset in creating engaging and high-performance web applications.</p>
            </div>
        </div>
        <div className='skillSet'>
            <img src={appDevelopment} alt='App Development' className='appDevelopmentImg'/>
            <div className='skillText'>
                <h1>App Development</h1>
                <p>With a solid foundation in React Native, my expertise extends to the dynamic realm of app development. Leveraging the power of React Native, I proficiently create cross-platform mobile applications that seamlessly run on both iOS and Android devices. My skills encompass the development of intuitive and responsive user interfaces, ensuring a compelling user experience. I am adept at harnessing the capabilities of React Native to build efficient and scalable mobile solutions, reflecting a commitment to staying at the forefront of cutting-edge technologies in the ever-evolving landscape of web and mobile development.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Skills;
