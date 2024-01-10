import React from "react";
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate'
import About from "../../cointainers/about";
import Resume from "../../cointainers/resume";
import Contact from "../../cointainers/contact";
import Portfolio from "../../cointainers/portfolio";
import Skills from "../../cointainers/skills";
const Home = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const handleNavigateToContactMe = () => {
        navigate('/contact');
    }
    return (
        <>
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Sudiksha Gandhi
                    <br />
                    Front end developer
                </h1>
            </div>
             <Animate
                play duration={1.5} delay={1} start={
                    {
                        transform: 'translateY(550px) ',
                    }
                }
                end={
                    {
                        transform: 'translatex(0px) ',
                    }
                }
            > 
                <div className="home__contact-me">
                    <button className='btn'>Download CV</button>
                    <button onClick={handleNavigateToContactMe} download className='btn btn-primary'>Contact</button>
                </div>
                
            </Animate>
           

        </section>
         <About/> 

      
         <Resume/>
         <Skills/> 
        
         <Portfolio/> 
         <Contact/>
        </>
        
    )
    
}

export default Home;