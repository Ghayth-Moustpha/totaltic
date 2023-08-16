import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componant/Nav/Nav";
import Home from "./componant/views/Home" ;
import About from "./componant/views/About";
import Contact from "./componant/views/Contact"; 
import "./App.css" ;

/// padding : margin :  
const App = () => {
  return (
    
    <div > 
    <Nav /> 
    <div className="pt-10 h-screen h-auto">  
   
    <Routes>
      <Route path="/" element= {<Home />} />  
      <Route path="Home" element= {<Home />} />  
      <Route path="about" element= {<About />} />   
      <Route path="contect" element = {<Contact />} /> 

    </Routes> 
  
    </div>
    <footer class="bg-gray-900 py-6 text-white  bottom-0">
    <div class="container mx-auto text-center">
      <p>&copy; 2023 TotalTicket. All rights reserved for SPU.</p>
    </div>
  </footer>
   
    </div>
   ); 
}

export default App ; 

