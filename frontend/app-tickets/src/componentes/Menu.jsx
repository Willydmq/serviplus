import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                <li className="nav-item">
                    <Link to={"/menu-principal"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            DashBoard
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                        <i className="nav-icon fas fa-cog" />
                        <p>
                            Configuración
                            <i className="fas fa-angle-left right" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"/roles-admin"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Roles</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Usuarios</p>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                        <i className="nav-icon fas fa-ticket-alt" />
                        <p>
                            Tickets
                            <i className="fas fa-angle-left right" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Categorias</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Tickets Admin</p>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;