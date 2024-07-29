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
                <p>I am a seasoned software engineer with over 8 years of experience as a Java Backend Developer. I specialize in design and implementation of highly scalable, real-time, and distributed solutions for <span>FinTech, E-Commerce, and Smart Automotive</span> domains.<br/> I am also well-equipped with the knowledge to deliver cutting-edge Artificial Intelligence and Gen AI solutions, thanks to my recent degree in Artificial Intelligence. </p>
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