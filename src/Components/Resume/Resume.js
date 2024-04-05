import React from 'react';
import "./Resume.css";
import resume from '../../Images/Resume.pdf'

const Resume = () => {

  return (
    <section className='resume'>
        <a href={resume} target='_blank' rel="noreferrer"><button className='resumeBtn'>View Resume</button></a>
        <a href={resume} download={resume}><button className='resumeBtn'>Download Resume</button></a>
    </section>
  )
}

export default Resume
