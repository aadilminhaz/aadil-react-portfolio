import './Experience.css';
import '../Skills/Skills.css';
import Experience_Data from '../../assets/experience_data';
import {  Key } from 'react';

interface ExperienceItem {
    title: string;
    image: string;
  }
/*
const Experience1 = ()=>{
    return (
        <div className="experience">
            <div className="skills-title">
                <h1>My recent works</h1>
            </div>
            <div className="skills-intro">
                <p>Along with higly distributed and scalable Microservices, REST API and Event-Driven solutions I am well equiped with knowledge to deliver cutting-edge Artificial Intelligence and Gen AI solutions (Thanks to my recent Degree in Artificial Intelligene). </p>
            </div>

            <div className='skills-containter'>
                
                {Experience_Data.map(experience: ExperienceItem, index: number)=> {
                     return <div key={index} className='skill-format'>
                            <h1>{experience.title}</h1>
                            <div className='skill-image'>
                                <img src={experience.image} alt="pic"/>
                            </div>
                        </div>
                })}
            </div>

            <div className="skills-containter">
                <div className="skill-format">
                    <h1>'Hey Alexa, how much gas my car has?'</h1>
                </div>
                <div className="skill-format">
                    <h1>'GenAI powered Robot to deliver your food'</h1>
                </div>

                <div className="skill-format">
                    <h1>'Hey Alexa, how much gas my car has?'</h1>
                </div>
               
            </div>
        </div>
    );
}

export default Experience1;
*/