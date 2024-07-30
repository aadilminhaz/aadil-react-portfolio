import Blogs from "../Blogs/Blogs";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";



function HomePage() {

    return(
        <>
      
            <Navbar/>
            <Home/>
            <Skills/>
      
            <Experience/>
            <Blogs/>
            
        </>
    );
}

export default HomePage;