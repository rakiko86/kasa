import React from 'react';
import Banner from '../Components/Banner';
import Logo from '../Components/Logo';
import Logements from "../Components/Logements";
import Footer from '../Components/Footer';
const Layout = () => {
    return (
        <div>
            <Logo/> 
             <Banner/>
   

       <h1>Chez vous, partout et ailleurs</h1>
       <Logements/>
       <Footer/>
        </div>
    );
};

export default Layout;