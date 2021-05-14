import { useState } from 'react';
import './Votes.css';

function Votes(){
    const [chocVotes, setChocVotes] = useState(0);
    const [vanVotes, setVanVotes] = useState(0);
    const [mintVotes, setMintVotes] = useState(0);

    function addChoc(change:number):void{
        setChocVotes(prev => prev + change);
    }
    function addVan(change:number):void{
        setVanVotes(prev => prev + change);
    }
    function addMint(change:number):void{
        setMintVotes(prev => prev + change);
    }

    let totalVotes = chocVotes + vanVotes + mintVotes;
    function percentage(voteType:number){
        return  Number(voteType) / totalVotes * 100;
    }

    let chocStyle = {
        width: percentage(chocVotes) + "%",
        backgroundColor: "#D2691E",
    }
    let vanStyle = {
        width: percentage(vanVotes) + "%",
        backgroundColor: "#f3e5ab"
    }
    let mintStyle = {
        width: percentage(mintVotes) + "%",
        backgroundColor: "#98ff98"
    }


    return(
        <div className="Votes">
            <h1>Vote Here</h1>
            <button onClick={() => addChoc(+1)}>Chocolate</button>
            <button onClick={() => addVan(+1)}>Vanilla</button>
            <button onClick={() => addMint(+1)}>Mint</button>
            { totalVotes > 0 ? (
            <div>
            <div className="flavor-votes">  
                <p>Chocolate</p>
                <p>{chocVotes}: ({percentage(chocVotes).toFixed(2)}%)</p>
                <div style={chocStyle} className="flavor-bar"></div>
            </div>
            <div className="flavor-votes">
                <p>Vanilla</p>
                <p>{vanVotes}: ({percentage(vanVotes).toFixed(2)}%)</p>
                <div style={vanStyle} className="flavor-bar"></div>
            </div>
            <div className="flavor-votes">
                <p>Mint</p>
                <p>{mintVotes}: ({percentage(mintVotes).toFixed(2)}%)</p>
                <div style={mintStyle} className="flavor-bar"></div>
            </div>  
            </div> ) : (<p>No votes yet.</p>)}
            
        </div>
    )
}
export default Votes;