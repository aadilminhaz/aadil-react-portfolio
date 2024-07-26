import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Blogs from "./Components/Blogs/Blogs";





function App() {

  return(
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      
      <Experience/>
      <Blogs/>
      <Footer/>
    </>
  );
}

export default App;