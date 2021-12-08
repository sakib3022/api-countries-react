import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flags, capital, region } = props.country
    return (
        <div className='country'>
            <h2>Name:{name.official}</h2>
            <img src={flags.png} alt="" />
            <h2>Capital:{capital}</h2>
            <h2>Region:{region}</h2>
        </div>
    );
};

export default Country;