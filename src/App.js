import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Error from "./pages/Error";

const App = () => {
  return <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Error/>} />
   
  
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
