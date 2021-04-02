import React from 'react';
import { Emojis, Button } from '../../shared';
import { Link } from 'react-router-dom';

export default class EmptyPage extends React.Component {

    render() {
        return(
            <div className="container-empty-page">
                <div className="emoji-empty-page" style={{ fontSize: '4rem', height: '4rem', marginBottom: '2rem'}}>
                    <Emojis></Emojis>
                </div>
                <div className="content-empty-page">
                    <p>Not a single listing here, fancy a new one?</p>
                </div>
                <div className="button-empty-page">
                    <Link to="/new-listing">
                        <Button>New Ad</Button>
                    </Link>
                </div>
            </div>

        )
    }
}