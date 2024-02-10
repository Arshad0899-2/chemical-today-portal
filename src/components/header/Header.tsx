import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img src = { companyLogo } alt="Chemical Today"/>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="/posts">Posts</a></li>
                        <li><a href="/sectors">Sectors</a></li>
                        <li><a href="/insights">Insights</a></li>
                        <li><a href="/spotlight">Spotlight</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/equipment">Equipment</a></li>
                        <li><a href="/sustainability">Sustainability</a></li>
                        <li><a href="/digitalization">Digitalization</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button className="btn-download">Download the App</button>
                    <button className="btn-subscribe">Magazine Subscribe</button>
                    <button className="btn-tv">Chemical Today TV</button>
                </div>
            </header>
        </>
    );
};

export default Header;