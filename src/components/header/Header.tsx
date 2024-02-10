import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";

const Header: React.FC = () => {

    const textInfo: string = "- Pearl Polyurethane, Covestro sign climate-neutral MDI supply deal AkzoNobel to expand water-based texture paints capacity in China - HRS showcases restart of the chemical industry in India";
    const navElements = [
        'Posts', 'Sectors', 'Insights', 'Spotlight', 'Product', 'Events', 'Equipment', 'Sustainability', 'Digitalization'];

    return (
        <>
            <header className="header">
                <div className='logo-container'>
                    <img className="logo" src={companyLogo} alt="Chemical Today" />
                </div>
                <div className='header-info'>
                    <p className='text-info'>
                        {textInfo}
                    </p>
                </div>

                <div className='navigation'>
                    {navElements.map((text) => (
                        <a className='item'>{text}</a>
                
                    ))}
                </div>

                {/* <div className="header-actions">
                    <button className="btn-download">Download the App</button>
                    <button className="btn-subscribe">Magazine Subscribe</button>
                    <button className="btn-tv">Chemical Today TV</button>
                </div> */}
            </header>
        </>
    );
};

export default Header;