import React from 'react';
import T from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Section } from '../../shared';

import '../css/Layout.css';
import { getTags } from '../../../store/selectors';
import { tagsLoadAction } from '../../../store/actions';


function Layout({ title, children, ...props }) {

    
    return (
        <div className="layout">
            <Header className="header" {...props} />
                <main className="main">
                    <h1 className="title">{title}</h1>
                    <Section className="content" {...props}>{children}</Section>
                </main>
            <Footer className="footer" />
        </div>
    )
}

Layout.propTypes = {
    title: T.string,
    children: T.object
}

Layout.defaultTypes = {
    title: '',
    children: ''
}

export default Layout