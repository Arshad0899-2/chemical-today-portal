import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";
import magzineCover from "../../assets/header-assets/magzine_cover.png";
import { CoverPageHeader } from "../../utils/constants";

const Header: React.FC = () => {

    return (
        <>
            <header className="header">


                <div className='header-top'>

                    <div className='logo-container'>
                        <img className="logo" src={companyLogo} alt="Chemical Today" />
                    </div>

                    <div className="header-actions">
                        <div className='divider'></div>
                        <img className="magazineCoverImg" src={magzineCover} alt="magazine cover" />
                        <div className='read-more'>
                            <p className='readMoreTest'> { CoverPageHeader.readMoreText } </p>
                            <div className='read-more-button'>
                                <p> { CoverPageHeader.readMore }</p>
                                <p className='arrow'>&rarr;</p>
                            </div>
                        </div>
                        <div className="header-btn">
                            <a className="btn"> { CoverPageHeader.downloadApp } </a>
                            <a className="btn"> { CoverPageHeader.magazineSubscribe } </a>
                            <a className="btn"> { CoverPageHeader.chemicalTodayTV } </a>
                        </div>
                    </div>
                    
                </div>

                <div className='header-info'>
                    <p className='text-info'>
                        { CoverPageHeader.textInfo }
                    </p>
                </div>

                <div className='navigation'>
                    {CoverPageHeader.navElements.map((text:string) => (
                        <a className='item'>{ text }</a>

                    ))}
                </div>
            </header >
        </>
    );
};

export default Header;