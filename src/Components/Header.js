import React from 'react';
import Banner from './Banner';
import Logo from './Logo';

const Header = () => {
    return (
        <div>
            <header className='header'>
                <ul>
                <li> <Logo/></li> 
                <li> <Banner/></li>
                </ul>
               
          
                 </header>
        </div>
    );
};

export default Header;