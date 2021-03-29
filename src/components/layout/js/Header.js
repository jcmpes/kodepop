import React from 'react';
import { Button, Emojis } from '../../shared'


import '../css/Header.css'

function Header({ ...props }) {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-logo">
                    <Emojis className="header-emojis"/>
                    kodepop
                </div>
                <Button variant="" className="header-btn" onClick={props.onLogout}>
                    Log Out
                </Button>
            </nav>
        </header>
    )
}

export default Header