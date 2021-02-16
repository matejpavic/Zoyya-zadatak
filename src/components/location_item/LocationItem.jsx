import React from 'react';
import './LocationItem.scss';


function LocationItem({ name, address, imageUrl }) {
    return (
        <div>
            <img src={imageUrl} alt='location' />
            <h1>
                {name}
            </h1>
        </div>
    );
}

export default LocationItem;