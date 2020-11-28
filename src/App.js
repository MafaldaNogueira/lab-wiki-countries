import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <Navbar />
      <CountriesList />
      <Switch>
        <Route path="/countries/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
