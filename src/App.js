import './App.css';
import locations from './database/locations.json';
import React, { useState } from 'react';
import Header from './components/header/Header';
import LocationList from './components/location_list/LocationList';
import LocationDetail from './components/location_detail/LocationDetail';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  return (
    <div className="App">
      <Header setSelectedLocation={setSelectedLocation} />
      {
        !selectedLocation ?
          <LocationList selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} locations={locations}/>
        : !!selectedLocation ?
        <LocationDetail setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} locations={locations}/>
        : '' 
      }
    </div>
  );
}

export default App;
