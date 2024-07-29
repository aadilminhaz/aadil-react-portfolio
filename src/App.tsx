import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
  

/*
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Blogs from "./Components/Blogs/Blogs";
*/
import HomePage from './Components/HomePage/HomePage';
import BlogWeb from './Pages/BlogsWeb/BlogsWeb';







function App() {

  return(
    

    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/blogs" element={<BlogWeb/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    /*<Router>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
        <Routes/>  
          <Route path="/blogs" element={<BlogWeb/>} />    
          <Route path="/" element={<HomePage/>} />
          
        <Routes/>
    </Router>   */
  
    /*
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog-web" component={BlogWeb} />
        </Switch>
      </Router>
      <Navbar/>
      <Home/>
      <Skills/>
      
      <Experience/>
      <Blogs/>
      <Footer/>
    </>
    */
  );
}

export default App;