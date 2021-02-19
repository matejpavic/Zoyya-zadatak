import React from 'react';
import './Header.scss';

function Header({ setSelectedLocation }) {
    return (
        <div className='header'>
            <img src='https://uploads-ssl.webflow.com/5f104abb3aa5a96156dbb059/5fb8ac52ff41deaade86da80_zoyya-black.svg' 
            alt='zoyya'
            onClick= {() => { setSelectedLocation(null) } }
            />
            <div className='navigation'>
                <div className='nav-item'>Back to business app</div>
                <div className='nav-item'>My places</div>
                <div className='nav-item'>My appointments</div>
            </div>
        </div>
    );
}

export default Header;