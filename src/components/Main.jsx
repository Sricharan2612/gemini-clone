import React from 'react';
//Styles
import '../styles/Main.css';
//Components
import Nav from './Nav';
import { assets } from '../assets/assets';
import { ContextState } from '../context/Context';

const Main = () => {
    const {
        input, setInput, recentPrmopt, setRecentPrompt, prevPrmopt, setPrevPrompt, showResult, setShowResult, loading, setLoading, resultData, setResultData, onSent } = ContextState();
    return (
        <div className='main'>
            <Nav />
            <div className="main-container">
                {
                    !showResult ? (
                        <>
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
                        </>
                    ) : (
                        <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="user_icon" />
                                <p>{recentPrmopt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="gemini_icon" />
                                {
                                    loading
                                        ? (<div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>)
                                        : (
                                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                        )
                                }
                            </div>
                        </div>
                    )
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => { setInput(e.target.value); }} value={input} type="text" name="search" id="search" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery_icon" />
                            <img src={assets.mic_icon} alt="mic_icon" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
