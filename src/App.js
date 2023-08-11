import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componant/Nav/Nav";
import Home from "./componant/views/Home" ;
import About from "./componant/views/About";
import Contact from "./componant/views/Contact"; 


/// padding : margin :  
const App = () => {
  return (
    
    <div className="block"> 
    <Nav /> 
    
    <div className="pt-10">  
    
    <Routes>
      <Route path="/" element= {<Home />} />  
      <Route path="Home" element= {<Home />} />  
      <Route path="about" element= {<About />} />   
      <Route path="contect" element = {<Contact />} /> 

    </Routes> 
    
    </div>
    
   
    </div>
   ); 
}

export default App ; 

