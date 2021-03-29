import React from 'react';
import Header from './Header'
import Footer from './Footer'
import './Layout.css'


function Layout({ title, children }) {
    return (
        <div className="Layout">
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