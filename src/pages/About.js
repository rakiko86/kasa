import React from 'react';
import { aboutList } from '../assets/data/aboutData';
import Logo from '../Components/Logo';
import Banner from '../Components/Banner';


const About = () => {
    return (
        <div>
          <Logo/>
             <Banner/>
             <h1>A Propos</h1>
             {aboutList.map((item, index) => (
        <div key={index} className="about-item">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
           
           

        </div>
    );
};

export default About;