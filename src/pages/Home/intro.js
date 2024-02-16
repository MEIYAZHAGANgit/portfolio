import React from 'react'

function Intro() {
  return (
    <div className='h-[120vh] bg-primary flex flex-col items-start justify-center gap-8'>
    <h1 className='text-white'>Hi ,I am</h1>
    <h1 className="text-7xl sm:text-3xl text-secondary font-semibold"> Meiyazhagan P</h1>
    <h1 className="text-5xl sm:text-3xl text-white font-semibold"> I build things for the web.</h1>
    <p className="text-white">  I'm an enthusiastic MERN stack developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. <br/>As a recent graduate, I am eager to apply my skills and knowledge to contribute effectively to web development projects.</p>
<button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded"> Get Started & Scroll</button>
    </div>
  )
}

export default Intro;
