import React from 'react'
import Navbar from "./Navbar";
import Main from "./Main";
import Section from "./Section";
import { Outlet, Link } from "react-router-dom";
import ReactSection from './ReactSection';


const Home = () => {
  return (
    <div>
    
      <Navbar/>
      <Main/>
      <Section/>
    
    </div>
  )
}

export default Home
