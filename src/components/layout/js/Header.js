import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { Button, Emojis } from '../../shared';
import { Search } from '../../filters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../css/Header.css'
import LogoutButton from '../../shared/LogoutButton';

function Header({ ...props }) {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/">
                    <div className="header-logo">
                        <Emojis className="header-emojis"/>
                        kodepop
                    </div>
                </Link>
                <Search {...props}/>
                <div>
                    <Link to="/advert/new">
                        <Button
                            style={{ padding: '.47rem .49rem', marginRight: '3px' }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Link>
            
                    <LogoutButton></LogoutButton>
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    onLogout: T.func.isRequired
}

export default Header