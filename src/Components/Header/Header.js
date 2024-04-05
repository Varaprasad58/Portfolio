import React, {useState} from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import img1 from "../../Images/Varaprasad.png";
import contactimg from "../../Images/download.png";
import menu from "../../Images/Menu.png";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Header">
    <img src={img1} alt="Varaprasad" className='desktopMenuimg'/>
     <div className="desktopMenulink">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuLinklist'>Home</Link>
      <Link activeClass='active' to='skillSection' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuLinklist'>About</Link>
      <Link activeClass='active' to='contactSec' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuLinklist'>Contact me</Link>
     </div>
     <button className='desktopMenubtn' onClick={()=>{document.getElementById('contactSec').scrollIntoView({behavior:'smooth'});}}>
        <img src={contactimg} alt="Contactimage" className='Contactimg'/>Contact me
     </button>

     <img src={menu} alt="Menu" className='menuImg' onClick={()=>setShowMenu(!showMenu)}/>
     <div className="desktopMenu" style={{display: showMenu? 'flex':'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='menuLinklist' onClick={()=>setShowMenu(!false)}>Home</Link>
      <Link activeClass='active' to='skillSection' spy={true} smooth={true} offset={0} duration={500} className='menuLinklist' onClick={()=>setShowMenu(!false)}>About</Link>
      <Link activeClass='active' to='contactSec' spy={true} smooth={true} offset={-50} duration={500} className='menuLinklist' onClick={()=>setShowMenu(!false)}>Contact me</Link>
     </div>
    </nav>
  )
}

export default Header;
