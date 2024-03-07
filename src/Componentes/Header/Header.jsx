import "./Header.css"
import Logo from "./partesDelHeader/Logo/Logo";
import Navbar from "./partesDelHeader/Navbar/Navbar";


function Header(){

    return(
        <header className="contenedor">
            <Logo></Logo>
            <Navbar></Navbar>
        </header>
    );
}


export default Header;
