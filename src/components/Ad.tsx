import { useState } from 'react';
import './Ad.css';

function Ad(){
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
    let darkClass = "";
    function darkOn(){
        setdarkModeOn(true);
    }
    function darkOff(){
        setdarkModeOn(false);
    }
    if(darkMode){
        darkClass = " dark"
    }
    function changeFontSize(change:number):void{
        setFontSize(prev => prev + change);
    }
    const styles = {
        fontSize: fontSize + "px"
    }
    return(
        <div className="ad-section">
            <div className={"ad" + darkClass}>
                <p>Vote For</p>
                <p className="flavor-font" style={styles}>{flavor}</p>
            </div>
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
export default Ad;