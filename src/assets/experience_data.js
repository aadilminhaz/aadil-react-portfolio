import experience_ignite from '../../src/assets/experience_ignite.png';
import experience_alexa from '../../src/assets/experience_alexa.png';
import experience_ai from '../../src/assets/exp_ai.png';
import conference_ai from '../../src/assets/conference.jpeg'
import experience_ai_pro from '../../src/assets/exp_ai_pro.png';


const Experience_Data = [
    {
        title: "'Hey Alexa, tell me the fuel level in my car!'",
        image: experience_alexa,
        info: "AI powered Alexa voice assistant",
        details: "Designed and implemented multiple prototypes from scratch, including Smart Alexa Skill that enables users to get car's information via voice command.",
        link: ""
        
    },
    {
        title: "'Harman Ignite Connected Car Cloud'",
        image: experience_ignite,
        info: "Highly Scalable Connected Car Cloud Microservices Platfrom, Harman Ignite",
        details: "Led the design, development and enhancement of real-time web services for Harman Ignite, ensuring robust, secure and product quality code.",
        link: ""
        
    },
    {
        title: "'Research on Multi-Modal AI Security'",
        
        image: conference_ai,
        info: "Multimodal AI Security: Mitigating prompt attack on AI Models using AI-Gateway",
        details: "I presented my ongoing research on Multimodal AI Security at the Multimodal AI Conference in London, organized by the UK Open Multimodal AI Network (UKOMAIN) and UK Research and Innovation. My work focuses on mitigating prompt-based attacks across text, speech, and vision models, securing multimodal AI systems for real-world, production deployments.",
        link: "https://multimodalai.github.io/multimodalai25/accepted-abstracts/"
    },
    {
        title: "'Research on GenAI powered Robot to deliver your food'",
        
        image: experience_ai,
        info: "Vision Transformer model based Authentication on food delivery robot",
        details: "For my Masters Degree thesis and on-going independent research, built a custom Vision Transformer LLM model integrated with a multi-sensor fusion module using RGB and infrared cameras. This system achieved facial authentication with zero manual user input in various real-world conditions, including complete darkness, and delivered over 90% accuracy for both false positives and false negatives.",
        link: "https://github.com/aadilminhaz/Thesis_AI_ROBOT_Face_Identification_Transfomer_Model"
    }
]

export default Experience_Data;