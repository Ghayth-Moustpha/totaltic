import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componant/mainparts/Nav/Nav";
import Home from "./componant/Pages/Home" ;
import About from "./componant/Pages/About";
import Contact from "./componant/Pages/Contact"; 
import "./App.css" ;
import Footer from "./componant/mainparts/Footer";
import Login from "./componant/Guest/Login";
import Signup from "./componant/Guest/Login";

/// padding : margin :  
const App = () => {
  return (
    
    <> 
    <Nav /> 
    <div className="pt-10 h-screen h-auto">  
    <Routes>
      <Route path="/" element= {<Home />} />  
      <Route path="Home" element= {<Home />} />  
      <Route path="about" element= {<About />} />   
      <Route path="contect" element = {<Contact />} /> 
      <Route path="login" element = {<Login />} />   
    <Route path="sginup" element = {<Signup />} /> 

    </Routes> 
  
    <Footer /> 
    </div>
    
     
    </>
   ); 
}

export default App ; 

