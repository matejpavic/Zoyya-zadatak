import React from 'react';
import './LocationList.scss';
import locations from '../../database/locations.json';


function LocationList({selectedLocation, setSelectedLocation}) {
    return (
        <div>
            {
                locations.map(location =>  <div onClick={()=>setSelectedLocation(location)}>{location.name}</div>)
            }
        </div>
    );
}

export default LocationList;