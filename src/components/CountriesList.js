import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  return (
    <div>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
