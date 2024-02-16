import React from 'react';
import Intro from './intro';
import About from './About';
import Studies from "./Studies";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
function Home() {
  return (
    <div className="bg-primary px-40 sm:px-5">
    <Intro />
    <About />
    <Studies/>
    <Contact/>
    <Footer />
    <SocialMedia />
  
    </div>
  )
}

export default Home;