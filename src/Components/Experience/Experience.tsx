import React from 'react';
import Experience_Data from '../../assets/experience_data';
import './Experience.css';
import '../Skills/Skills.css';

interface ExperienceItem {
  title: string;
  image: string; // Make sure the type is string to hold the image path
  info: string;
  details: string;
}

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="experience-title">
        <h1>My recent works</h1>
      </div>
      <div className="experience-intro">
        <p>
          Along with highly distributed and scalable Microservices and Event-Driven applications , I have worked on various innovative full-stack prototypes, solving real world problems like remote operation on cars.
        </p>
      </div>
      <div className="experience-container">
        {Experience_Data.map((experience: ExperienceItem, index: number) => (
          <div key={index} className="experience-format">
            <h1>{experience.title}</h1>
            <div className='experience-information'>
                <div className='experience-info-left'>
                    <h3>{experience.info}</h3>
                    <div className='experince-details'>
                        <p>{experience.details}</p>
                    </div>
                </div>   
                <div className="experience-image">
                    <img src={experience.image} alt="experience" />
                </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
