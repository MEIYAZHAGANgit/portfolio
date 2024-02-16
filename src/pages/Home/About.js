import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills=["HTML","CSS","Javascript","MongoDB","React.js","Node.js","Express.js" ]
  return (
    <div>
    <SectionTitle title="About"/> 
    <div className="flex w-full items-center sm:flex-col">
    <div className="h-70vh w-1/2 sm:w-full">
    <lottie-player src="https://lottie.host/a4625967-6858-4b77-a8c2-0bde16095f5e/sq843jDcp8.json" background="transparent" speed="1" autoplay ></lottie-player>
    </div>
    <div className="flex flex-col gap=5 w-1/2 sm:w-full">
    <p className="text-white">
    Greetings!.., I am a 2024 graduate of Sathyabama University, holding a Master's degree in Computer Science and Engineering. My academic journey has laid the foundation for my passion for technology and innovation.
    </p><br />
    <p className="text-white">
    I undertook an intensive MERN stack development course on the GUVI learning platform. This immersive experience honed my skills in MongoDB, Express.js, React.js, and Node.js, empowering me to embrace the full spectrum of modern web development.
    </p><br />
    <p className="text-white">
    Currently, I am actively applying my acquired skills to develop dynamic and responsive web pages. Each project is a testament to the seamless integration of my academic knowledge with practical expertise gained through the MERN stack course. I am dedicated to crafting engaging user experiences that reflect both creativity and technical finesse.
    </p>
    </div>
   <br /> 
    </div>
    <div className="py-5">
     <h1  className= "text-tertiary text-xl">
       Here are a few Technologies I've working with recently :
     </h1>
    <div className ="flex flex-wrap gap-5 mt-5"> {
        skills.map((skill,index)=>(
   <div className="border border-tertiary py-2 px-5">
   <h1 className="text-tertiary">{skill}</h1>
   </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default About;