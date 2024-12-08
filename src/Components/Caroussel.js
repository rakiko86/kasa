import React from 'react';
const Caroussel = () => {
    return (
        <div>
           
  {images.map((picture, index) => (
    <div key={index}>
      <img src={picture} alt={`Image ${index}`} />
    </div>
  ))}
        </div>
    );
};

export default Caroussel;