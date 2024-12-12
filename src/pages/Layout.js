import React from 'react';
import Banner from '../Components/Banner';
import Logo from '../Components/Logo';
import Logements from "../Components/Logements";
import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";



const Layout = () => {
    return (
        <div className='layout'>
            <header className='Banner'>
                <ul>
                <li> <Logo/></li> 
                <li> <Banner/></li>
                </ul>
               
               
                 </header>
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