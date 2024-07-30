

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
                    <h1>Kafka - Producing and Consuming events from the same Partition</h1>
                    <div className='blogs-image'>
                        <img src={BlogImage1} alt="Blog-Image"/>
                    </div>
                    <div className='blog-overlay'>
                        <p>Coming on 10th August, 2024</p>
                    </div>
                    
            </div>
                <div className="blogs-format">
                    <h1>Battle of the Optimisers: <br/>ADAM vs ADAMW</h1>
                    <div className='blogs-image'>
                        <img src={BlogImage2} alt="Blog-Image"/>
                    </div>
                    <div className='blog-overlay'>
                        <p>Coming on 22th August, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;