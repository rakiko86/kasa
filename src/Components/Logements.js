import axios from 'axios';
import React, { useEffect } from 'react';

const Logements = () => {
    // Le useEffect se joue lorsque le composant est monté

    useEffect (()=> {
axios.get("") .then((response)=>console.log(response.data))
    },[])
    return (
        <div>
        <h1>Logements</h1> 
        </div>
    );
};

export default Logements;