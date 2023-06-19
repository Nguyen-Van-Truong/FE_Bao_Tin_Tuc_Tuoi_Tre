import './App.css';
import {Outlet} from "react-router-dom";

import React, {useEffect} from "react";
export const MyContext = React.createContext();


function App() {
    const [backgroundColor, setBackgroundColor] = React.useState('#ffffff')
    const [textColor, setTextColor] = React.useState('#000000')
    const [textAlign, setTextAlign] = React.useState('left');
    const [fontSize, setFontSize] = React.useState(26);
    const [lineHeight, setLineHeight] = React.useState(1);

    useEffect(() => {
        let debackgroundColor = localStorage.getItem('backgroundColor');
        if(debackgroundColor){
            setBackgroundColor(debackgroundColor);
        }
        let detextColor = localStorage.getItem('textColor');
        if(detextColor){
            setTextColor(detextColor);
        }
        let detextAlign = localStorage.getItem('textAlign');
        if(detextAlign){
            setTextAlign(detextAlign);
        }
        let defontSize = parseFloat(localStorage.getItem('fontSize'));
        if(defontSize){
            setFontSize(defontSize);
        }
        let delineHeight = parseFloat(localStorage.getItem('lineHeight'));

        if(delineHeight){
            setLineHeight(delineHeight);
        }
    }, []);

    return (
        <MyContext.Provider value={{backgroundColor, setBackgroundColor, textColor, setTextColor, textAlign, setTextAlign, fontSize,setFontSize, lineHeight, setLineHeight}}>
            <div className="App">
                <Outlet></Outlet>
            </div>
        </MyContext.Provider>
    );
}

export default App;
