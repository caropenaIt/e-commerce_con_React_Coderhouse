import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{

    return (
        
        <nav className="nav">
            <img src="./src/assets/logo-mercado-caro.png" alt="logo" className="logo"/>
            
            <div className="nav-links">
                <button><a href="#">Remeras</a></button>
                <button><a href="#">Pantalones</a></button>
                <button><a href="#">Zapatillas</a></button>
            </div>
            <CartWidget/ >
        </nav>
    )
};

export default NavBar;