import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/Components/_Banner.scss"

const Banner = () => {
    return (
        <div className='Banner'>
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                <li>Accueil </li>
                </NavLink>
                <NavLink to="/About"className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                <li>A Propos</li>
                </NavLink>
    
 
               
                
            </ul>
             
            
            
        </div>
    );
};

export default Banner;