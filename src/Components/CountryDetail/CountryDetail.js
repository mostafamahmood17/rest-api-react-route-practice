import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
const CountryDetail = () => {
    const [detail , setDetail] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(res => res.json())
        .then(data => setDetail(data[0]))
    }, [])
    const {country} = useParams();
    
   
    return (
        <div>
            <h1>See Details : {detail.name}</h1>
             <h2>Country : {detail.capital}</h2>
             <h3>Population : {detail.population}</h3>
             {detail.name && (
                <>
                <h3>Currency: {detail.currencies[0].name}</h3>
                <h3>Language: {detail.languages[0].name}</h3>
                </>
                )}
                {console.log('detail', detail)}
                {/* {console.log("detail.name", detail.name)} */}
                {/* {console.log("detail.name.currency", detail.currencies[0].name)} */}
              
    
        </div>
    );
};

export default CountryDetail;