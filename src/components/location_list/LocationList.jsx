import React from 'react';
import './LocationList.scss';
import LocationItem from '../location_item/LocationItem';


function LocationList({selectedLocation, setSelectedLocation, locations}) {
    return (
        <div>
            {
                locations.map(location => {
                    return (
                        <div onClick={()=>setSelectedLocation(location)}>
                            <LocationItem
                            name={location.name}
                            imageUrl={location.imageUrl}
                            address = {location.address}
                            selectedLocation={selectedLocation}
                            />                
                        </div>
                    )
                }
                )
            }
        </div>
    );
}

export default LocationList;