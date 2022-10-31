import React from 'react';
import Menu from './Menu';
import Logo from '../assets/img/AdminLTELogo.png';
import { Link } from 'react-router-dom';

const SidebarContainer = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to={"#"} className="brand-link">
                <img src={Logo} alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">App Tickets</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <Link to={"#"} className="d-block">{localStorage.getItem("username")}</Link>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <Menu></Menu>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );
}

export default SidebarContainer;