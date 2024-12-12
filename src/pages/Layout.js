import React from 'react';


import Logements from "../Components/Logements";
import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";
import Header from '../Components/Header';import coteImage from '../../cote.png'



const Layout = () => {
    return (
        <div className='layout'>
         
            <Header/>
                 <body>
 
                 <div className='background-img'>
                   < h1>Chez vous, partout et ailleurs</h1>
  
            </div>
            
                <main className='logement'>
            <Logements/>
            </main>
            <Footer/>
            </body>
        </div >
    );
};

export default Layout;