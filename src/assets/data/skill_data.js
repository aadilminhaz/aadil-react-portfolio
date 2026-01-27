import skill_backend from '../skills-backend.png';
import skill_event_driven from '../skills-event-driven.png';
import skill_ai_pro from '../exp_ai_pro.png';

const skill_data = [
    {
        title: "AI/ML - Desing, Development & Deployment",
        image: skill_ai_pro,
        info: "Expert in AI/ML solution design, development, and deployment, with proven industry experience and a Master’s degree in Artificial Intelligence & Cybersecurity from a Russell Group university (England), specializing in risk assessment, fraud detection, regulatory compliance, and application security.",
        technologies: ["PyTorch, LangChain, Fast-API, NLP, RAG", "Vector DB (OpenSearch, FIASS, S3 Vector)", "ML OPs, AWS Sagemaker & Bedrock", "Feature Engineering, Fine-Tuning & Evaluation"]
    },
    {
        title: "Microservices Backend",
        image: skill_backend,
        info: "With over 10 years of experience in Java-based backend technologies, I excel in building scalable Microservices REST APIs with cloud-native architecture. My expertise includes System Design, Design principles, Application Monitoring, and Application security.",
        technologies: ["Java 8, 11, 17", "Spring Boot", "Relational DB - MySQL", "AWS EC2, S3, CI/CD and more"]
    },
    {
        title: "Real-Time Event Driven applications",
        image: skill_event_driven,
        info: "With extensive experience of building event-driven architecture for Connected Car technology, I am proficient with messaging technologies like Kafka. ",
        technologies: ["Kafka", "NoSQL MongoDB", "Docker & Kubernetes", "Event processing using Kafka Streams"]
    }

]



export default skill_data;