import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  
   const navigate = useNavigate();

  return (
    <div>
     

    
<div className="bg-blue-100 font-Nova">
  <nav className="bg-blue-700 px-6 relative shadow-md">
    <div className="flex flex-row justify-between items-center py-2">
      <h3 onClick={() => navigate('/home')} className="font-semibold text-3xl text-white hover:cursor-pointer">RESOURCES</h3>
      <div className="group flex flex-col items-center">
        <button className="p-2 rounded-lg md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 fill-current" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
        </button>
        <div className="hidden group-hover:block md:block absolute md:static bg-blue-700 inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600">
          <div className="flex flex-row justify-center items-center text-center font-semibold text-gray-500">
            <p onClick={() => navigate('/home/html+css+JS')} className="hover:cursor-pointer px-6 py-1 flex flex-col md:flex-row md:items-center text-white" > 
             <img src="youtube.svg" alt="image" className="h-11 px-2"/>
              Youtube 
            </p>
            <p onClick={() => navigate('/home/otherResource')} className="hover:cursor-pointer px-6 py-1 flex flex-col md:flex-row md:items-center text-white"> 
            <img src="resource.svg" alt="image" className="h-11 px-2"/>
              Other Resource 
            </p>
            <p onClick={() => navigate('/home/techNews')} className=" hover:cursor-pointer px-6 py-1 flex flex-col md:flex-row md:items-center text-white"> 
            <img src="tech.svg" alt="image" className="h-11 px-2"/>
              Tech News 
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>



    </div>
  );
};

export default Navbar;
