import './Header.css';

interface Props{
    name:string
}
function Header({name}:Props){

    return (
        <div className="Header">
            <h1>Ice Cream Wars</h1>
            <h2>Welcome {name}</h2>
        </div>
    )
}
export default Header;