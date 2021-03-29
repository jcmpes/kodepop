import React from 'react';
import Header from './Header'
import Footer from './Footer'
import '../css/Layout.css'


function Layout({ title, children }) {
    return (
        <div className="layout">
            <Header className="header" />
                <main className="main">
                    <h1 className="title">{title}</h1>
                    <section className="content">{children}</section>
                </main>
            <Footer className="Footer" />
        </div>
    )
}

export default Layout