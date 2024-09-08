

import './Blogs.css';
import BlogImage1 from '../../assets/blog-image2.png';
import BlogImage2 from '../../assets/battle_optimisers.jpeg';

const Blogs = ()=>{
    return (
        <div className="blogs">
            <div className="blogs-title">
                <h1>Tech-Blogs</h1>
            </div>
            <div className="blogs-intro">
                <p>I will be sharing my research findings on Tech Blogs. Along with AI content, I will be sharing my approach and solution to interesting problems, I usually face while designing Microservices and Event-Driven appications.</p>
            </div>
            <div className="blogs-containter">
            <div className="blogs-format">
                <a href="https://www.linkedin.com/pulse/strict-event-ordering-kafka-using-java-21-spring-boot-aadil-minhaz-xyece/?trackingId=FD5%2BcwDDQ%2B%2BQNJIVcagluQ%3D%3D">
                    <h1>Kafka - Producing and Consuming events from the same Partition</h1>
                    <div className='blogs-image'>
                        <img src={BlogImage1} alt="Blog-Image"/>
                    </div>
                    <div className='blog-overlay'>
                        <p></p>
                    </div>
                </a>
                    
            </div>
                <div className="blogs-format">
                    <h1>Battle of the Optimisers: <br/>ADAM vs ADAMW</h1>
                    <div className='blogs-image'>
                        <img src={BlogImage2} alt="Blog-Image"/>
                    </div>
                    <div className='blog-overlay'>
                        <p>Coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;