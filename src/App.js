import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Error from "./pages/Error";

import Page from "./Components/Card";
const App = () => {
  return <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>} />
    <Route path="/About" element={<About/>} />
    <Route path="*" element={<Error/>} />
    <Route path="/Card" element ={<Page/>}/>
  
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
