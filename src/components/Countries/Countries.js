import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Coutries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello World:{countries.length}</h1>
            <div className='grid-menu'>
                {
                    countries.map(country => <Country
                        key={country.flags.png}
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;