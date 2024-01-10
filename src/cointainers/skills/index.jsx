import React from "react";
import {Line } from "rc-progress";
import { BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillData } from "./util";
import {Animate, AnimateKeyframes} from 'react-simple-animate';
import './style.scss';

const Skills=()=>{
    return(
        <section id="Skills " className="Skills">
        <PageHeaderContent headerText ="Skills"
        icon={<BsInfoCircleFill size={40}/>}
        />

  <div className="skills__content-wrapper">
    {
        skillData.map((item,i)=>(
           <div key={i} className="skills__content-wrapper__inner-content"> 
           <Animate play duration={1}
           delay={0.5}
           start={{
            transform:'translateX(-220px)'
           }}
           end={{
            transform:'translateX(0px)'
           }}

           >
            <h3 className="skills__content-wrapper__inner-content__category-text"> {item.label}</h3>
              <div className="skils_content-wrapper__inner-contnet__progressbar-cointainer">
                {
                    item.data.map((skillItem,j)=>(
                        <AnimateKeyframes
                        play duration={1}
                        keyframes={["opacity:1","opacity:0"]}
                        iterationCount="1">
                            <div className="progressbar-wrapper" key={j}>
                                <p>
                                 {skillItem.skillName}   
                                </p>
                                <Line percent={skillItem.percentage}
                                strokeWidth="12"
                                strokeColor="var(--yellow-theme-main-color)"
                                trailWidth="12"
                                strokeLinecap="round"

                                />
                            </div>

                        </AnimateKeyframes>
                    ))
                }
              </div>
           </Animate>
           
           </div>
        ))
    }
  </div>



    </section>
    )
}
export default Skills;