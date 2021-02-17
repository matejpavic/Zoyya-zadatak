import React from 'react';
import './LocationDetail.scss';

function LocationDetail({setSelectedLocation, selectedLocation}) {
    return (
        <div className='details'>
            {/* <div className='details__heading'> */}
                <div className='details__card'>
                    <div className='card-wrap'>
                        <h2>{selectedLocation.name}</h2>
                        <div>{selectedLocation.address}</div>
                        <div>{selectedLocation.city}</div>
                        <button>Request your appointment</button>
                    </div>
                </div>
                <div className='details__image' style={{backgroundImage: `url(${selectedLocation.imageUrl})`}}/>
            {/* </div> */}
            {/* <div className='details__info'> */}
                {/* <div className='details__contacts'> */}
                    <div className='details__about'>
                        <h3>About us</h3>
                        <div>{selectedLocation.description}</div>
                    </div>
                    <div className='details__contact-info'>
                        <h3>Contact</h3>
                        <div><span style={{fontWeight: 'bold'}}>Email: </span> <span>{selectedLocation.email}</span></div>
                        <div><span style={{fontWeight: 'bold'}}>Cell: </span><span>{selectedLocation.phone}</span></div>
                    </div>
                {/* </div> */}
                <div className='details__working-hours'>
                    <h3>Working hours</h3>
                    <div>
                    {
                        selectedLocation.workShifts[0].openHours.map(every => {
                            return (
                                <div>
                                    <span>{every.dayName}</span>
                                    {
                                        !every.dayOff ?
                                        <>
                                            <span> {every.startTime}</span>
                                            <span> - {every.endTime}</span>
                                        </>
                                        :
                                        !!every.dayOff ?
                                            <span> NOT WORKING</span>
                                        :
                                        null
                                    }
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            {/* </div> */}
            <div className='details__links'></div>
            <div className='details__team'>
                <h3>Our team</h3>
            </div>
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