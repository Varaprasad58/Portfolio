import React from 'react';
import "./Intro.css";
import minato from "../../Images/Minato.jpg";
import {Link}  from "react-scroll";
import bag from "../../Images/bags.png";

const Intro = () => {
  return (
    <div className='intro'>
      <section id="introSection">
      <img src={minato} alt="Varaprasad" className='imgMinato'/> 
        <div className='introContent'>
          <span className='firstText'>Hello,</span>
          <span className='secondText'>I am <span className='thirdText'>Varaprasad Akireddy</span></span>
          <p className='firstPara'>A determined and visionary computer science student, driven by a <br/>
          steadfast commitment to entrepreneurship.</p>
          <Link className='linkHireme'><button className='linkButton'><img src={bag} alt="Bags" className="bagImg"/>Hire me</button></Link>
        </div> 
      </section>
    </div>
  )
}

export default Intro;

