import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Error from "./pages/Error";
import Page from "./pages/Page";




const App = () => {
  return <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>} />
    <Route path="/About" element={<About/>} />
    <Route path="*" element={<Error/>} />
    <Route path="/Page/:id" element={<Page/>}/>
   
    
  
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
