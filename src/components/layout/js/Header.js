import React from 'react';
import { Button, Emojis } from '../../shared'


import '../css/Header.css'

function Header() {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-logo">
                    <Emojis className="header-emojis"/>
                    kodepop
                </div>
                <Button variant="primary" className="header-btn">
                    Ads
                </Button>
            </nav>
        </header>
    )
}

export default Header