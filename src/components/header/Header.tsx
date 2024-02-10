import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";

const Header: React.FC = () => {

    const textInfo: string = "- Pearl Polyurethane, Covestro sign climate-neutral MDI supply deal AkzoNobel to expand water-based texture paints capacity in China - HRS showcases restart of the chemical industry in India";

    return (
        <>
            <header className="header">
                <div className='logo-container'>
                    <img className="logo" src = { companyLogo } alt="Chemical Today"/>
                </div>
                <div className='header-info'>
                    <p className='text-info'>
                        { textInfo }
                    </p>
                </div>
                <nav>
                    <ul className="navigation">
                        <li className='item'><a href="/posts">Posts</a></li>
                        <li className='item'><a href="/sectors">Sectors</a></li>
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