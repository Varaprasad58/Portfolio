// Import necessary dependencies
import React from 'react';
import './App.css'; // Import styles
import Header from './Header/Header';
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Resume from "./Resume/Resume";

// Define the main component (functional component)
function MyApp() {
  return (
    <div>
<Header/>
<Intro/>
<Resume/>
<Skills/>
<Contact/>
<Footer/>
    </div>
  );
}

// Export the main component for use in other files
export default MyApp;

