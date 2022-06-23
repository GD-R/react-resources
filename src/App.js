
import {
  
  Routes,
  Route,
} from "react-router-dom";
import Combine from "./components/Combine";
import Home from "./components/Home";
import OtherResource from "./components/OtherResource";
import ReactSection from "./components/ReactSection";
import Section from "./components/Section";
import TechNews from "./components/TechNews";





function App() {
  return (
    <div >
  
  <Routes>
   <Route path="*" element={<Home/>} />
   <Route path="/home" element={<Home/>} />
   <Route path="/home/otherResource" element={<OtherResource/>} />
   <Route path="/home/techNews" element={<TechNews/>} />
    <Route path="/home" element={<Combine/>}>
        <Route path="html+css+JS" element={<Section/>} />
        <Route path="react" element={<ReactSection/>} />
    </Route>
  </Routes>
   
    </div>
  );
}

export default App;
