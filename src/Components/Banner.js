import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/Pages/index.scss";

const Banner = () => {
    
    return (
        <div className='Banner'>
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "underlined")}>
                <li>Accueil </li>
                </NavLink>
                <NavLink to="/About"className={(nav)=>(nav.isActive ? "nav-active" : "underlined")}>
                <li>A Propos</li>
                </NavLink>
    
 
               
                
            </ul>
             
            
            
        </div>
    );
};

export default Banner;