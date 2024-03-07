import "./Navbar.css"

function Navbar(){

    return(
        <nav className="navBar">
            <a className="linkNavBar" href="#">inicio</a>
            <a className="linkNavBar" href="#">sobre mi</a>
            <a className="linkNavBar" href="#">contacto</a>
            <a className="linkNavBar" href="#">certificados</a>
        </nav>
    )
}

export default Navbar;