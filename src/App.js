import './App.css';
import locations from './database/locations.json';
import React, { useState } from 'react';
import LocationList from './components/location_list/LocationList';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  return (
    <div className="App">
      {!selectedLocation ?
        <LocationList selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
       : <div>
          ...INSERT SELECTED LOCATION DATA HERE...
        </div>}
      {!!selectedLocation &&  <div onClick={()=>setSelectedLocation(null)}>{"<- BACK"}</div>}
    </div>
  );
}

export default App;
