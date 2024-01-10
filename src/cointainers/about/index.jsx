import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";

import './style.scss';
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa';
import ME from "../../images/img.png";


const personalDetails = [
    {
        label: "Name:",
        value: "Sudiksha Gandhi",
    },

    {
        label: "Age:",
        value: "21",
    }
    ,
    {
        label: "Adress:",
        value: "India"
    },
    {
        label: "Email:",
        value: "sudikshaa.gandhi07@gmail.com",

    },
    {
        label: "Contact Me:",
        value: "+918307677805"
    },

];

const jobSummary = " loremLorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus praesentium. Dicta similique officia ipsam rem? Consequatur similique enim magnam minima reiciendis. Illo ea provident perferendis iure dicta autem expedita";
const About = () => {
    return (
        <section id="about " className="about">
            <PageHeaderContent headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                <Animate
                    play duration={1} delay={0.5} start={
                        {
                            transform: 'translateX(-900px) ',
                        }
                    }
                    end={
                        {
                            transform: 'translatex(0px) ',
                        }
                    }
                >
                    <h3>Front End Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>

                <Animate
                    play duration={1} delay={0.5} start={
                        {
                            transform: 'translateX(-900px) ',
                        }
                    }
                    end={
                        {
                            transform: 'translatex(0px) ',
                        }
                    }
                >
                <h3 className="personalInformationHeaderText" >
                    Personal Information
                </h3>
                <ul>
                    {
                    personalDetails.map((item,i)=>(
                           <li key={i}>
                            <span className="title">{item.label}</span>
                            <span className="value">{item.value}</span>
                           </li>
                    ))
}

                </ul>
                </Animate>
                </div>
                <Animate
                    play duration={1} delay={0.5} start={
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
                
                <div className="about__content__servicesWrapper">
                    <div className="about__content__servicesWrapper__innerContent">
                     <img src={ME}></img>
                                </div>
                </div>
             
                </Animate>
            </div>
            {/* </Animate> */}
        //  
        </section>
    )
}
export default About;