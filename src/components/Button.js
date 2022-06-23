import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";

const Button = () => {

  const navigate = useNavigate();

  

  return (
    <div className='flex my-40  md:my-5 mb-5  justify-center space-x-3'>
    
       <button onClick={() => navigate('/home/html+css+JS')} type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">HTML CSS JS</button>
       
       <button onClick={() => navigate('/home/react')} type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">REACT</button>
    
    </div>
  )
}

export default Button
