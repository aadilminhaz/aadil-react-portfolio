import './Home.css';
import home_image from  '../../assets/home_image.jpeg';
import linkedin_logo from '../../assets/linkedin_logo.png';
import github_logo from '../../assets/github_logo.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='home-container-left'>
                <h1><span>I'm Aadil Minhaz</span>, a Software Engineer & Russell Group Graduate based in England, UK.</h1>
                
                <p>AI/ML Engineer, Researcher & Backend Specialist with 10+ years of experience, building intelligent, scalable enterprise systems, backed by a Russell Group Master’s in AI & Cybersecurity.</p>
                <p>For CV, connect with me at: aadilminhaz@outlook.com</p>
                <div className='connect'>
                    <div className='connect-linkedin'>
                        <a href="https://www.linkedin.com/in/aadilminhaz" target="_blank"><img src={linkedin_logo} alt="" /></a>
                    </div>
                    <div className='connect-github'>
                        <a href="https://www.github.com/aadilminhaz"  target='_blank'><img src={github_logo} alt=""/></a>
                    </div>
                </div>

                </div>
                <div className='home-container-right'>
                    <img src={home_image} alt="I should be visible here!"/>
                </div>
            </div>
            
        </div>
    );

}

export default Home;