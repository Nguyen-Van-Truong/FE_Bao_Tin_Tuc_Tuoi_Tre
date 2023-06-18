import '../styles/style.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, {useRef, useState} from 'react';

const SettingComponent = ({text}) => {
    // Import tất cả biểu tượng từ thư viện Solid của Font Awesome
    library.add(fas);
    const [isMenuHidden, setMenuHidden] = useState(true);
    const [isAudioHidden, setAudioHidden] = useState(false);
    const [isDisplayHidden, setDisplayHidden] = useState(true);
    const [isStart, setStart] = useState(false);
    const [isPause, setPause] = useState(true);
    const [pitch, setPitch] = useState(null);
    const [rate, setRate] = useState(null);
    const [volume, setVolume] = useState(null);

    const pitchRangeRef = useRef(null);
    const rateRangeRef = useRef(null);
    const volumeRangeRef = useRef(null);

    const toggleDiv = () => {
        setMenuHidden(!isMenuHidden);
    };

    const hiddenDisplay = () => {
        setAudioHidden(false);
        setDisplayHidden(true);
    };

    const hiddenAudio = () => {
        setAudioHidden(true);
        setDisplayHidden(false);
    };

    const applay_audioParameter = () => {
        setStart(false);
        setPause(false);
        setPitch(pitchRangeRef.current.value);
        setRate(rateRangeRef.current.value);
        setVolume(volumeRangeRef.current.value);
        setStart(false);
        // eslint-disable-next-line no-undef
        responsiveVoice.pause();
        setPause(true);
    };

    const speech = () => {
        if(!isStart){
            // eslint-disable-next-line no-undef
            responsiveVoice.speak(text, 'Vietnamese Female', {
                pitch: pitch,
                rate: rate,
                volume: volume,
                onstart: ()=>{setStart(true)},
                onend: () =>(setStart(false))
            });
        }else{
            if(isPause){
                // eslint-disable-next-line no-undef
                responsiveVoice.resume();
                setPause(false);
            }else{
                // eslint-disable-next-line no-undef
                responsiveVoice.pause();
                setPause(true);
            }
        }
    };


    return (
        <div className="setting">
            <div id="setting_menu" className={isMenuHidden ? 'hidden' : ''}>
                <div className="setting_bar">
                    <button className={isAudioHidden ? 'item_bar active' : 'item_bar'} style={{borderRight:'2px solid black'}} id="audio_button" onClick={hiddenDisplay}>
                        Âm thanh
                    </button>
                    <button className={isDisplayHidden ? 'item_bar active' : 'item_bar'} id="display_button" onClick={hiddenAudio}>
                        Giao diện
                    </button>
                </div>

                <div id="setting_audio" className={isAudioHidden ? 'setting_panel hidden' : 'setting_panel'}>
                    <div>
                        <div className="audio_parameters">
                            <label htmlFor="pitchRange">Độ cao:</label>
                            <input type="range" id="pitchRange" min="0" max="2" step="0.1" defaultValue="1" ref={pitchRangeRef}/>
                        </div>
                        <div className="audio_parameters">
                            <label htmlFor="rateRange">Tốc độ:</label>
                            <input type="range" id="rateRange" min="0.5" max="2" step="0.1" defaultValue="1" ref={rateRangeRef}/>
                        </div>
                        <div className="audio_parameters">
                            <label htmlFor="volumeRange">Âm lượng:</label>
                            <input type="range" id="volumeRange" min="0" max="1" step="0.1" defaultValue="1" ref={volumeRangeRef}/>
                        </div>
                    </div>
                    <div style={{textAlign: 'left'}}>
                        <button style={{ padding: '5px 10px', borderRadius: '5px' }} onClick={applay_audioParameter}>
                            Áp dụng
                        </button>
                    </div>
                    <button id="start" onClick={speech}>
                        <FontAwesomeIcon icon="fas fa-pause" className={isPause ? 'myicon':'hidden'} />
                        <FontAwesomeIcon icon="fas fa-play" style={{marginLeft: '6px'}} className={isPause ? 'hidden' : 'myicon'}/>
                    </button>
                </div>

                <div id="setting_display" className={isDisplayHidden ? 'setting_panel hidden' : 'setting_panel'}>
                    <p style={{ fontSize: '30px' }}>display</p>
                </div>
            </div>

            <button onClick={toggleDiv} className="setting_button">
                <FontAwesomeIcon icon="fas fa-cogs" className="myicon" />
            </button>
        </div>
    );
};

export default SettingComponent;
