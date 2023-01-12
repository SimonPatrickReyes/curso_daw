import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
    <div className='navbar nabvar-dark bg-dark mt-5'>

        <Link to="/" className='navbar-brand mx-3'>Inicio</Link>

        <div className='d-flex'>
            <NavLink to="/dashdoard" className="btn btn-dark mr-2">Dashboard</NavLink>
            <NavLink to="/contact" className="btn btn-dark mr-2">Contacto</NavLink>
            <NavLink to="/login" className="btn btn-dark mr-2">Login</NavLink>
        </div>
    </div>
    )
}

export default Navbar