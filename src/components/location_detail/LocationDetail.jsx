import React from 'react';
import './LocationDetail.scss';

function LocationDetail({setSelectedLocation, selectedLocation}) {
    return (
        <div className='details'>
            {/* <div className='details__heading'> */}
                <div className='details__card'></div>
                <div className='details__image' style={{backgroundImage: `url(${selectedLocation.imageUrl})`}}/>
            {/* </div> */}
            {/* <div className='details__info'> */}
                {/* <div className='details__contacts'> */}
                    <div className='details__about'></div>
                    <div className='details__contact-info'></div>
                {/* </div> */}
                <div className='details__working-hours'></div>
            {/* </div> */}
            <div className='details__links'></div>
            <div className='details__team'></div>
            {/* <div>
                {selectedLocation.name}
            </div>
            {
                <div onClick={()=>setSelectedLocation(null)}>{"<- BACK"}</div>
            } */}
        </div>
    );
}
export default LocationDetail;