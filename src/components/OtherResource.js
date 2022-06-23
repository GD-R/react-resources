import React from 'react'
import Navbar from './Navbar'
import ResourceCard from './ResourceCard'
import { otherData } from './data'

const OtherResource = () => {
  return (
    <div>
      <Navbar/>
     <div className='my-40 container w-[90%] md:w-[90%] md:grid grid-cols-3 gap-3 md:my-5 mx-auto'>

     {otherData.map((item) => {
         return ( <ResourceCard key={item.link} name={item.name} link={item.link} /> )
    })}

   
   

     </div>
    </div>
  )
}

export default OtherResource
