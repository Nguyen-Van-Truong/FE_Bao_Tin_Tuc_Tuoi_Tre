import '../styles/style.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, {useState, useEffect, useContext} from 'react';
import {MyContext} from "../App";

const backgroundColors = [
    '#343434', // Đen
    '#d0d0d0', // Trắng
    '#d04141', // Đỏ
    '#329632', // Xanh lá cây
    '#7c7cd5', // Xanh dương
    '#a2a22f', // Vàng
    '#9a459a', // Hồng
    '#268d8d', // Lam
    '#987338', // Cam
    '#b936b9', // Tím
];
const textColors = [
    '#000000', // Đen
    '#d0d0d0', // Trắng
    '#b00000', // Đỏ
    '#00be00', // Xanh lá cây
    '#00009d', // Xanh dương
    '#777700', // Vàng
    '#ff00ff', // Hồng
    '#00ffff', // Lam
    '#ffb400', // Cam
    '#ff00ff', // Tím
];
// Import tất cả biểu tượng từ thư viện Solid của Font Awesome
library.add(fas);




const SettingComponent = ({text}) => {

    const [isMenuHidden, setMenuHidden] = useState(true);
    const [isAudioHidden, setAudioHidden] = useState(false);
    const [isDisplayHidden, setDisplayHidden] = useState(true);
    const [isStart, setStart] = useState(false);
    const [isPause, setPause] = useState(true);


    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

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

    useEffect(() => {
        // Lấy giá trị mặc định từ localStorage (nếu có)
        const storedPitch = localStorage.getItem('pitch');
        const storedRate = localStorage.getItem('rate');
        const storedVolume = localStorage.getItem('volume');

        if (storedPitch) {
            setPitch(parseFloat(storedPitch));
        }
        if (storedRate) {
            setRate(parseFloat(storedRate));
        }
        if (storedVolume) {
            setVolume(parseFloat(storedVolume));
        }
    }, []);

    const handlePitchChange = (event) => {
        const newPitch = parseFloat(event.target.value);
        setPitch(newPitch);
        localStorage.setItem('pitch', newPitch);
        cancelAudio();
    };

    const handleRateChange = (event) => {
        const newRate = parseFloat(event.target.value);
        setRate(newRate);
        localStorage.setItem('rate', newRate);
        cancelAudio();
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        localStorage.setItem('volume', newVolume);
        cancelAudio();
    };

    const cancelAudio = () => {
        // eslint-disable-next-line no-undef
        responsiveVoice.cancel();
        setStart(false);
        setPause(true);
    }

    const playAudio = () => {
        if(!isStart){
            // eslint-disable-next-line no-undef
            responsiveVoice.speak(text, 'Vietnamese Female', {
                pitch: pitch,
                rate: rate,
                volume: volume,
                onstart: ()=>{setStart(true); setPause(false)},
                onend: () =>(setStart(false))
            });
        }else{
            // eslint-disable-next-line no-undef
            if(responsiveVoice.isPlaying()){
                // eslint-disable-next-line no-undef
                responsiveVoice.pause();
                setPause(true);
            }else{
                // eslint-disable-next-line no-undef
                responsiveVoice.resume();
                setPause(false);
            }
        }
    };

    /*-------------------------------------------------------------------------------*/

    const Square = ({ color, onClick }) => {
        return (
            <div className= 'color_box'
                style={{
                    backgroundColor: color,
                }}
                onClick={onClick}
            ></div>
        );
    };
    const {setBackgroundColor, setTextColor, setTextAlign, fontSize ,setFontSize, lineHeight ,setLineHeight} = useContext(MyContext);


    // Hàm này được gọi khi người dùng bấm vào một ô
    const selectedBackgroundColor = (color) => {
        setBackgroundColor(color);
        localStorage.setItem('backgroundColor', color);

    };
    const selectedTextColor = (color) => {
        setTextColor(color);
        localStorage.setItem('textColor', color)
    };

    const selectedTextAlign = (option) => {
        setTextAlign(option);
        localStorage.setItem('textAlign', option);
    };

    const selectFontSize = (event) => {
        setFontSize(parseInt(event.target.value));
        localStorage.setItem('fontSize', event.target.value);
    };

    const selectLineSpacing = (event) => {
        setLineHeight(parseInt(event.target.value));
        localStorage.setItem('lineHeight',event.target.value);
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
                            <input type="range" id="pitchRange" min="0.1" max="2" step="0.05" value={pitch}  onChange={handlePitchChange}/>
                            <span>{pitch}</span> {/* Hiển thị giá trị volume */}
                        </div>
                        <div className="audio_parameters">
                            <label htmlFor="rateRange">Tốc độ:</label>
                            <input type="range" id="rateRange" min="0.1" max="1.5" step="0.05" value={rate}  onChange={handleRateChange}/>
                            <span>{rate}</span> {/* Hiển thị giá trị volume */}
                        </div>
                        <div className="audio_parameters">
                            <label htmlFor="volumeRange">Âm lượng:</label>
                            <input type="range" id="volumeRange" min="0.1" max="1" step="0.05" value={volume} onChange={handleVolumeChange}/>
                            <span>{volume}</span> {/* Hiển thị giá trị volume */}
                        </div>
                    </div>
                    <button id="start" onClick={playAudio}>
                        <FontAwesomeIcon icon="fas fa-pause" className={isPause ? 'hidden':'myicon'} />
                        <FontAwesomeIcon icon="fas fa-play" style={{marginLeft: '6px'}} className={isPause ? 'myicon' : 'hidden'}/>
                    </button>
                </div>

                <div id="setting_display" className={isDisplayHidden ? 'setting_panel hidden' : 'setting_panel'} style={{padding: '10px'}}>
                    <div>
                        <div className='labelPanel_color'>Chọn màu nền</div>
                        <div className='panel_color'>
                            {backgroundColors.map((color, index) => (
                                <Square
                                    key={index}
                                    color={color}
                                    onClick={() => selectedBackgroundColor(color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='labelPanel_color' >Chọn màu chữ</div>
                        <div className="panel_color">
                            {textColors.map((color, index) => (
                                <Square
                                    key={index}
                                    color={color}
                                    onClick={() => selectedTextColor(color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='labelPanel_color' >Chọn canh lề</div>
                        <div className='panel_color' style={{marginTop: '20px'}}>
                            <button className='align_box' onClick={() => selectedTextAlign('left')}><FontAwesomeIcon icon="fas fa-align-left" className='myicon' /></button>
                            <button className='align_box' onClick={() => selectedTextAlign('center')}><FontAwesomeIcon icon="fas fa-align-center" className='myicon' /></button>
                            <button className='align_box' onClick={() => selectedTextAlign('right')}><FontAwesomeIcon icon="fas fa-align-right" className='myicon' /></button>
                        </div>
                    </div>

                    <div>
                        <div className='labelPanel_color' >Chọn cỡ chữ và giản cách</div>
                        <div className='panel_color' style={{marginTop: '20px'}}>
                            <div>
                                <label style={{fontWeight:"bold", fontSize: '20px', marginRight: '10px'}}>Cỡ chữ: </label>
                                <input className='font-he-box' type="number" value={fontSize} min={0} onChange={selectFontSize} />
                            </div>
                            <div>
                                <label style={{fontWeight:"bold", fontSize: '20px', marginRight: '10px'}}>Dãn dòng: </label>
                                <input className='font-he-box' type="number" value={lineHeight} min={1}   onChange={selectLineSpacing} />
                            </div>
                        </div>
                    </div>







                </div>
            </div>

            <button onClick={toggleDiv} className="setting_button">
                <FontAwesomeIcon icon="fas fa-cogs" className="myicon" />
            </button>
        </div>
    );
};

export default SettingComponent;
