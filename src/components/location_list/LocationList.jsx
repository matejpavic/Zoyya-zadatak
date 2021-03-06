import React from 'react';
import './LocationList.scss';
import LocationItem from '../location_item/LocationItem';


function LocationList({selectedLocation, setSelectedLocation, locations}) {
    return (
        <div className='container'>
            <h1>Featured</h1>
            <div className='wrapper'>
                {
                    locations.map(location => {
                        return (
                            <div onClick={()=>setSelectedLocation(location)}>
                                <LocationItem
                                name={location.name}
                                imageUrl={location.imageUrl}
                                category={location.category}
                                address = {location.address}
                                selectedLocation={selectedLocation}
                                />                
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}

export default LocationList;