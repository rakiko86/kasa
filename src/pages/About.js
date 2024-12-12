import React from 'react';
import { aboutList } from '../assets/data/data/aboutData';
import Logo from '../Components/Logo';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import "../Styles/Pages/index.scss";


const About = () => {
    return (
        <div className='about'>

             <header className='Banner'>
                <ul>
                <li> <Logo/></li> 
                <li> <Banner/></li>
                </ul>
               
          
                 </header>
                 
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