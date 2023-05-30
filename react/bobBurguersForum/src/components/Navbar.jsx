import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
//----<NavLink> == <a>
//----<NavLink to="<path-escrito-en-router/index.jsx>">

//----Importar imagen: import <nombre_cualquiera> from "<ruta>";
//----Usar la imagen: <img src={nombre} />
import logo from "../assets/images/logo.png";
import login_button from "../assets/images/login_button.png";
const Navbar = () => {
    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const cerrarSesion = () => {
        console.log('cerrando...')
        navigate('/login')
        setUser(null)
    }

    return (
        <nav className="nav-pc">
            <NavLink to="/" target="_blank">
                <img src={logo} className="logo" alt="logo" />
            </NavLink>
            <ul>
                <li className="nav-pc__li">
                    <NavLink to="/" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Home</p>
                    </NavLink>
                </li>
                <li className="nav-pc__li">
                    <NavLink to="/characters" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Characters</p>
                    </NavLink></li>
                <li className="nav-pc__li">
                    <NavLink to="/episodes" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Episodes</p>
                    </NavLink></li>
                <li className="nav-pc__li">
                    <NavLink to="/stores" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Stores</p>
                    </NavLink></li>


            </ul>
            <NavLink to="/login" target="_blank">
                <img src={login_button} alt="login button" className="loginButton" />
            </NavLink>

         
        </nav>
    );
};

export default Navbar;
