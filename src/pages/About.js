import React from 'react';
import { aboutList } from '../assets/data/aboutData';

import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";
import Header from '../Components/Header';


const About = () => {
    return (
        <div className='about'>
<Header/>
             
                 
                 <img className='montagne' src='/montagne.png' alt='montagne' />
              
            

           <section>
            
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
      </section>
      
       <footer>
            <Footer/>
            </footer> 
         

        </div>
        

    );
    
};

export default About;