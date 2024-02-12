import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";
import searchIcon from "../../assets/header-assets/search.svg";
import { CoverPageHeaderConstants } from "../../utils/constants";

const Header: React.FC = () => {

    return (
        <>
            <header className="main-header">
                <div className='header-body'>
                    <div className='header-logo'>
                        <img className="company-logo" src={companyLogo} alt="Chemical Today" />
                    </div>
                    <div className='header-navigation'>
                        {CoverPageHeaderConstants.navElements.map((text: string) => (
                            <a className='nav-item'>{text}</a>
                            // Use the below to route
                            // <Link className='item' to={'#'}>{ text } <Link/>
                        ))}
                    </div>
                    <div className='header-search'>
                        <img className='header-search-icon' src={searchIcon} />
                    </div>
                </div>
            </header >
        </>
    );
};

export default Header;