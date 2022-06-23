import React from 'react'
import Main from "./Main";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";
import Section from './Section';
import ReactSection from './ReactSection';

const Combine = () => {
  return (
    <div>
       
     <Navbar/>
     <Main/>
     <Outlet>
         <Section/>
         <ReactSection/>
     </Outlet>



    </div>
  )
}

export default Combine
