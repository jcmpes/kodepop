import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { Button, Emojis, Search } from '../../shared';

import '../css/Header.css'

function Header({ onLogout, ...props }) {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/">
                    <div className="header-logo">
                        <Emojis className="header-emojis"/>
                        kodepop
                    </div>
                </Link>
                <div>
                    <Search {...props}/>
                </div>
                <Button variant="" className="header-btn" onClick={onLogout}>
                    Log Out
                </Button>
            </nav>
        </header>
    )
}

Header.propTypes = {
    onLogout: T.func.isRequired
}

export default Header