import './App.scss';
import {Routes,Route , useLocation} from 'react-router-dom';
import About from './cointainers/about';
import Resume from './cointainers/resume';
import  Skills from './cointainers/skills';
import  Portfolio from './cointainers/portfolio';
import  Contact from './cointainers/contact';
import  Home from './cointainers/home';
import  Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import PageHeaderContent from "./components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";


function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async(main)=>{
    await loadFull(main)
  }
  const renderParticlesJsInHomePage =location.pathname==="/";

  return (
    <div className="App">
    {/* particles */}
    { renderParticlesJsInHomePage && (    <Particles id="particles" options={particles} init={handleInit}/>
    )}
   

    {/* navBar */}

    <Navbar/>
<div className="App__main-page-content">
    {/* main page content */}
    <Routes>
     <Route index path="/"element={<Home/>}/> 
     <Route  path='/about' element={<About/>}/> 
     
     <Route  path='/resume' element={<Resume/>}/> 
     <Route  path='/skills' element={<Skills/>}/> 
     <Route  path='/portfolio' element={<Portfolio/>}/> 
     <Route  path='/contact' element={<Contact/>}/> 
     

    </Routes>
    
    
    </div>
    </div>
  );
}

export default App;
