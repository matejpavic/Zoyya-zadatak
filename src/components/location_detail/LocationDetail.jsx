import React from 'react';
import './LocationDetail.scss'

function LocationDetail({setSelectedLocation, selectedLocation}) {
    return (
        <div>
        
            <div>
                {selectedLocation.name}
            </div>
            
            {
                <div onClick={()=>setSelectedLocation(null)}>{"<- BACK"}</div>
            }
        </div>
    );
}

export default LocationDetail;