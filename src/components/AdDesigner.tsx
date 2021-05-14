import { useState } from 'react';
import Ad from './Ad';
import './AdDesigner.css';

function AdDesigner(){
    const [flavor, setFlavor] = useState("Chocolate");
    const [darkMode, setdarkModeOn] = useState(true);
    const [fontSize, setFontSize] = useState(25);

    function chooseChocolate(){
        setFlavor("Chocolate");
    }
    function chooseVanilla(){
        setFlavor("Vanilla");
    }
    function chooseMint(){
        setFlavor("Mint");
    }
    function darkOn(){
        setdarkModeOn(true);
    }
    function darkOff(){
        setdarkModeOn(false);
    }
    function changeFontSize(change:number):void{
        setFontSize(prev => prev + change);
    }

    return(
        <div className="ad-section">
            <h1>Ad Designer</h1>
            <Ad flavor={flavor} fontSize={fontSize} darkTheme={darkMode}/>
            <div className="ad-choices">
                <div className="flavor">
                    <p>What to Support</p>
                    <button disabled={flavor === "Chocolate"} onClick={chooseChocolate}>Chocolate</button>
                    <button disabled={flavor === "Vanilla"} onClick={chooseVanilla}>Vanilla</button>
                    <button disabled={flavor === "Mind"} onClick={chooseMint}>Mint</button>   
                </div>
                <div className="dark-mode">
                    <p>Color Theme</p>
                    <button disabled={darkMode} onClick={darkOn}>Dark</button>
                    <button disabled={darkMode === false} onClick={darkOff}>Light</button>
                </div>
                <p>Font Size</p>
                <div className="font-size">
                    <button onClick={() => changeFontSize(-1)}>Down</button>
                    <p>{fontSize}</p>
                    <button onClick={() => changeFontSize(+1)}>Up</button>
                </div>                
            </div>
        </div>
    )
}
export default AdDesigner;