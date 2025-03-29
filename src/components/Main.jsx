import React from 'react';
//Styles
import '../styles/Main.css';
//Components
import Nav from './Nav';
import { assets } from '../assets/assets';

const Main = () => {
    return (
        <div className='main'>
            <Nav />
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Sree</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="compass_icon" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="compass_icon" />
                    </div>
                    <div className="card">
                        <p>Brainstrom team work activities for our work retreat</p>
                        <img src={assets.message_icon} alt="compass_icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="compass_icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
