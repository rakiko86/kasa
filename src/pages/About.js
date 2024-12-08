import React from 'react';
import { aboutList } from '../assets/data/aboutData';
import Logo from '../Components/Logo';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";

const About = () => {
    return (
        <div>
          <div className='Banniere'>
          <Logo/>
             <Banner/>
             
             </div>
             
             {aboutList.map((item, index) => (
        <div key={index} className="about-item">
          <details>
            <summary>
            {item.title}
            
            </summary>
            {item.content}
            </details>
            
        </div>
        
      ))}
           
         <Footer/>

        </div>
        

    );
    
};

export default About;