import "./style.css"

const Header = () => {
    return(
        <header className="header">
            <img className="logo" src="./logo.svg" alt="Logo Nu Kenzie" />
            <div className="centralize-button"><button className="header-button">Inicio</button></div>
        </header>
    )
}

export default Header;