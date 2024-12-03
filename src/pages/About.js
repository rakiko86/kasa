import React from 'react';
import Navigation from '../Components/Layout/SubComponents/Navigation';
import { aboutList } from '../assets/data/aboutData';

const About = () => {
    return (
        <div>
             <Navigation/>
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