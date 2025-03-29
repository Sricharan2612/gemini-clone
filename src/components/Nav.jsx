import React from 'react';
//Styles
import '../styles/Nav.css';
import { assets } from '../assets/assets';

const Nav = () => {
    return (
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user_icon" />
        </div>
    );
};

export default Nav;
