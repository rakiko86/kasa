import React from 'react';


import Logements from "../Components/Logements";
import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";
import Header from '../Components/Header';


const Layout = () => {
    return (
        <article className='layout'>
         
            <Header/>
                
 
                 <div className='background-img'>
                   < h1>Chez vous, partout et ailleurs</h1>
  
            </div>
            
                <main className='logement'>
            <Logements/>
            </main>
            <Footer/>
            
        </article >
    );
};

export default Layout;