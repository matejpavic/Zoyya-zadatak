import React from 'react';
import './LocationItem.scss';


function LocationItem({ name, address, imageUrl, category }) {
    return (
        <div className='item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}  />
            <div className='description' >
                <div className='category'>{category}</div>
                <div className='name'>{name}</div>
                <div className='address'>{address}</div>
            </div>
        </div>
    );
}

export default LocationItem;