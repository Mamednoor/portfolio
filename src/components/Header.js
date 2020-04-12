import React, { Component } from 'react';


class Header extends Component {
    render () {
        return (
            <div>
                <navbar>
                    <a href="/">Home</a>
                    <a href="/">Porte Folio</a>
                    <a href="/">Cv</a>
                    <a href="/">Contact</a>
                </navbar>
            </div>
        )
    }
}

export default Header;