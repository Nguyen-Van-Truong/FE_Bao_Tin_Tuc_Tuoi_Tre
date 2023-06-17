import '../styles/style.css'

import React, { useState } from 'react';

const SettingComponent = () => {
    const [isMenuHidden, setMenuHidden] = useState(true);
    const [isAudioHidden, setAudioHidden] = useState(false);
    const [isDisplayHidden, setDisplayHidden] = useState(true);

    const toggleDiv = () => {
        setMenuHidden(!isMenuHidden);
    };

    const hiddenDisplay = () => {
        setAudioHidden(!isAudioHidden);
        setDisplayHidden(!isDisplayHidden);
    };

    const hiddenAudio = () => {
        setAudioHidden(!isAudioHidden);
        setDisplayHidden(!isDisplayHidden);
    };

    const applay_audioParameter = () => {
        // Implement your logic for applying audio parameters
    };

    const speech = () => {
        // Implement your logic for speech
    };

    return (
        <div className="setting">
            <div id="setting_menu" className={isMenuHidden ? 'hidden' : ''}>
                <div className="setting_bar">
                    <button className="item_bar" id="audio_button" onClick={hiddenDisplay}>
                        Âm thanh
                    </button>
                    <button className="item_bar" id="display_button" onClick={hiddenAudio}>
                        Giao diện
                    </button>
                </div>

                <div id="setting_audio" className={isAudioHidden ? 'setting_panel hidden' : 'setting_panel'}>
                    <div>
                        <div className="audio_parameters">
                            <label htmlFor="pitchRange">Độ cao:</label>
                            <input type="range" id="pitchRange" min="0" max="2" step="0.1" defaultValue="1" />
                        </div>
                        <div className="audio_parameters">
                            <label htmlFor="rateRange">Tốc độ:</label>
                            <input type="range" id="rateRange" min="0.5" max="2" step="0.1" defaultValue="1" />
                        </div>
                        <div className="audio_parameters">
                            <label htmlFor="volumeRange">Âm lượng:</label>
                            <input type="range" id="volumeRange" min="0" max="1" step="0.1" defaultValue="1" />
                        </div>
                    </div>
                    <button id="apply_audioPar" style={{ padding: '10px' }} onClick={applay_audioParameter}>
                        Áp dụng
                    </button>
                    <button id="start" onClick={speech}>
                        Phát
                    </button>
                </div>

                <div id="setting_display" className={isDisplayHidden ? 'setting_panel hidden' : 'setting_panel'}>
                    <p style={{ fontSize: '30px' }}>display</p>
                </div>
            </div>

            <button onClick={toggleDiv} className="setting_button">
                <i className="fa-solid fa-gears"></i>
            </button>
        </div>
    );
};

export default SettingComponent;
