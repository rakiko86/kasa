import React from 'react';
import Banner from '../Components/Banner';
import Logo from '../Components/Logo';
import Logements from "../Components/Logements";
import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";


const Layout = () => {
    return (
        <div className='layout'>
            <div className='Banniere'>
            <Logo/> 
             <Banner/>
   
      
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <Logements/>
            <Footer/>
        </div>
    );
};

export default Layout;