import React, { useState } from 'react';
//Styles
import '../styles/Sidebar.css';
//Images
import { assets } from '../assets/assets';
import { ContextState } from '../context/Context';

const Sidebar = () => {

    const { prevPrompt, onSent, setRecentPrompt, newChat } = ContextState();
    const [extended, setExtended] = useState(false);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(!extended)} src={assets.menu_icon} alt='menu_icon' className='menu' />
                <div onClick={newChat} className="new-chat">
                    <img src={assets.plus_icon} alt="plus_icon" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && <div className="recent">
                    <p className="recent-title">Recent</p>
                    {
                        prevPrompt.map((item, i) => {
                            return (
                                <div key={i} onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="msg_icon" />
                                    <p>{item.slice(0, 18)} ...</p>
                                </div>
                            );
                        })
                    }
                </div>}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="activity_icon" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="settings_icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
