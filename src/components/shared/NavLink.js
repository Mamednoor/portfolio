import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/NavLink.css'

function NavLink() {


    return (
    <header className="header-navlink">
        <div className="navBar">
            <ul className={"links"}>
                <li className="link-li">
                    <Link className="header-a" to="/">Home</Link>
                </li>
                <li className="link-li">
                    <Link className="header-a" to="/dashboard">Porte Folio</Link>
                </li>
                <li className="link-li">
                    <Link className="header-a" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </header>
    );
}


export default NavLink;