import React from 'react';
import {Link} from "react-router-dom";

const country = (props) => {
    const {name , capital, region, alpha3Code} = props.country;
//    console.log(props.country.name)
    return (
        <div>
            <h2>country : {name}</h2>
            <h2>Capital : {capital}</h2>
            <h2>Region : {region}</h2>
            <Link to={`/country/${alpha3Code}`}><button>Show Detail of {alpha3Code}</button></Link>

 

            
        </div>
    );
};

export default country;