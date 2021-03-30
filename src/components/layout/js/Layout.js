import React from 'react';
import T from 'prop-types';
import Header from './Header'
import Footer from './Footer'

import '../css/Layout.css'


function Layout({ title, children, ...props }) {
    return (
        <div className="layout">
            <Header className="header" {...props} />
                <main className="main">
                    <h1 className="title">{title}</h1>
                    <section className="content">{children}</section>
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