import React from 'react'
import SectionTitle from "../../components/SectionTitle";

function Contact() {
    const user={
        Name: "MEIYAZHAGAN P",
        Age: "25",
        Gender:"Male",
        Gmail:"meiyazhaganmailbox@gmail.com",
        Mobile:"8608070604",
        Country :"India",
        State:"Tamilnadu",
        City:"Chennai",
    
    };
  return (
    <div>
    <SectionTitle title ="Contact Me"/>
    <div  className="flex sm:flex-col items-center justify-between">
    <div className="flex flex-col gap-2">
    <h1  className="text-tertiary">{"{"}</h1>
    {Object.keys(user).map((key)=>(
        <h1 className="ml-5">
        <span className="text-tertiary">{key} :</span>
        <span className="text-tertiary">{user[key]}</span>
        
        </h1>
    ))}
    <h1  className="text-tertiary">{"}"}</h1>
    </div>
    <div className="h-[500px]">
    
    <lottie-player src="https://lottie.host/998c8ec6-726f-404e-b2b3-a1c37ea5b19d/nFOkH0L3iM.json" background="##FFFFFF" speed="1"   autoplay ode="normal"></lottie-player>
    </div>
    </div>
</div>

    
  );
}

export default Contact;