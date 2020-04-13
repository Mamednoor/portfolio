import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'
import '../stylesheet/NavLink.css'

class NavLink extends Component {
state = {
    toggle:false
}
Toggle = () => {
    this.setState({toggle:!this.state.toggle})
}
render() {
    return (
    <header>
        <div className="navBar">
            <button onClick={this.Toggle}>
                <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? "links show-nav" : "links"}>
                <Link to="/"><li className="link" href="/">Home</li></Link>
                <Link to="/about"><li className="link" href="/about">Présentation</li></Link>
                <Link to="/dashboard"><li className="link" href="/dashboard">Porte Folio</li></Link>
                <Link to="/contact"><li className="link" href="/contact">Contact</li></Link>
            </ul>
        </div>
    </header>
    );
}
}

export default NavLink;