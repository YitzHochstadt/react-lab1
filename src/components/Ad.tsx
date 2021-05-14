import './Ad.css'

interface Props{
    flavor:string;
    fontSize:number;
    darkTheme:boolean;
}
function Ad({flavor, fontSize, darkTheme}:Props){
    const style = {
        fontSize: fontSize + "px",
    }
    let darkClass = ""
    if (darkTheme){
        darkClass = " dark"
    }
    return(
    <div className={"Ad" + darkClass}>
    <p>Vote For</p>
    <p className="flavor-font" style={style}>{flavor}</p>
    </div>
    )
}
export default Ad;