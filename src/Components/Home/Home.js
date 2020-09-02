import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../country/country';

const Home = () => {
    const [country , setCountry] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h1>All countries</h1>
            {
                country.map( country => <Country key ={country.alpha3Code} country={country}></Country>)
            }
            
        </div>
    );
};

export default Home;