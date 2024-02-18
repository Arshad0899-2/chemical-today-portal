import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";
import searchIcon from "../../assets/header-assets/search.svg";
import { CoverPageHeaderConstants } from "../../utils/constants";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    return (
        <>
            <header className="main-header">
                <div className='header-body'>
                    <div className='header-logo'>
                        <Link to = "/"><img className="company-logo" src={companyLogo} alt="Chemical Today" /></Link>
                    </div>
                    <div className='header-navigation'>
                        {CoverPageHeaderConstants.navElements.map((text: string) => (
                            <Link to = {text.toLocaleLowerCase()} className='nav-item'>{text}</Link>
                            
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