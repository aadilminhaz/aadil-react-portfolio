import './Skills.css';
import Skill_Data from '../../assets/data/skill_data';



interface SkillItem {
    title: string;
    image: string; // Make sure the type is string to hold the image path
    info: string;
    technologies: string[];
  }

const Skills: React.FC = ()=>{

    return (
        <div className="skills">
            <div className="skills-title">
                <h1>What I can build for you</h1>
            </div>
            <div className="skills-intro">
                <p>Along with higly distributed and scalable Microservices, REST API and Event-Driven solutions I am well equiped with knowledge to deliver cutting-edge Artificial Intelligence and Gen AI solutions (Thanks to my recent Degree in Artificial Intelligene). </p>
            </div>
            
            <div className="skills-containter">

             {Skill_Data.map((skill: SkillItem, index: number) => (
                <div key={index} className="skill-format">
                    <h1>{skill.title}</h1>
                    <p>{skill.info}</p>
                    <div className='skill-info'>
                        <div className='skill-info-left'>
                            {skill.technologies.map((tech, techIndex) => (
                            <div key={techIndex} className='tech-box1'>
                                <p>{tech}</p>
                            </div>
                            ))}
                        </div>
                        <div className='skill-info-image'>
                            <img src={skill.image} alt="skill-image loading"></img>
                        </div>
                    </div>
                    
                    
                </div>
             ))}    
            </div>
        </div>
    );
}

export default Skills;
//Hi Purvi,
//I came across a Software Engineer opening at CGI, J0524-1826 matching my profile. I'd love to connect with you and would be very grateful if you could provide a reference for my application.