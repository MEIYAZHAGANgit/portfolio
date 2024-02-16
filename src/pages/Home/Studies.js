import React from 'react'
import SectionTitle from "../../components/SectionTitle";
import {studies} from "../../resources/studies";
function Studies() {
    const[selectedItemIndex, setSelectedItemIndex]=React.useState(0);
  return (
    <div >
    <SectionTitle title="Education" />
    <div className="flex py-10 gap-10 sm:flex-row sm:flex-col">
       <div className= "flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
       {studies.map((studies,index)=>( 
        <div onClick ={()=>{
            setSelectedItemIndex(index);
        }} className='cursor-pointer'>     
            <h1 className={`text-xl  px-5
             ${selectedItemIndex === index ? ' text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3':'text-white'}`}> {studies.period}</h1>
        </div>

       ))

       }
       
       </div>
       <div className="flex items-center justify-center gap-10 sm:flex-col ">
       <img src={studies[selectedItemIndex].image}alt=""className="h-60 w-70"/>
       
       <div>
       <h1 className="text-secondary text-xl py-3">{studies[selectedItemIndex].Department} </h1>
       <h1 className="text-tertiary text-xl py-3">{studies[selectedItemIndex].school} </h1>
       <p className="text-white text-xl py-3">{studies[selectedItemIndex].description}  </p>
       <p className="text-white text-xl py-3">{studies[selectedItemIndex].Project }</p>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Studies;