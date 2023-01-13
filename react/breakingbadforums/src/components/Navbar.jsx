import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const cerrarSesion = () => {
        navigate("/login")
        setUser(null)
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">
                    Home
                </NavLink>
                <NavLink to="/about" className="btn btn-outline-primary">
                    About
                </NavLink>
                <NavLink to="/blog" className="btn btn-outline-primary">
                    Blog
                </NavLink>
                <NavLink to="/characters" className="btn btn-outline-primary">
                    Characters
                </NavLink>
                user? (
                <button className="btn btn-dark" onClick={() => cerrarSesion()}>
                    Cerrar sesion
                </button>
                ):(
                {/*QUEDA POR HACER*/}
                )

            </div>
        </nav>
    );
};

export default Navbar;
