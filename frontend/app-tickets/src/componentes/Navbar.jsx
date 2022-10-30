import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mensajeConfirmacion from '../helpers/Mensajes.js';

const Navbar = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        //eliminar toda la informacion del localstore html
        localStorage.removeItem("iduser");
        localStorage.removeItem("token");
        localStorage.removeItem("username");

        //mensaje de cierre de sesion
        mensajeConfirmacion('success', 'Sesión finalizada correctamente.');

        //redireccionar al login
        navigate("/");
    }

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" data-widget="pushmenu" to={"#"} role="button"><i className="fas fa-bars" /></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <strong className="nav-link" style={{ cursor: 'pointer' }} onClick={cerrarSesion}>Salir</strong>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" data-widget="fullscreen" to={"#"} role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={"#"} role="button">
                        <i className="fas fa-th-large" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;