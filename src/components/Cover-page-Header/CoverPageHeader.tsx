import React from 'react';
import './CoverPageHeader.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";
import magzineCover from "../../assets/header-assets/magzine_cover.png";
import { CoverPageHeaderConstants } from "../../utils/constants";

const CoverPageHeader: React.FC = () => {

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
                            <p className='readMoreTest'> {CoverPageHeaderConstants.readMoreText} </p>
                            <div className='read-more-button'>
                                <p> {CoverPageHeaderConstants.readHere}</p>
                                <p className='arrow'>&rarr;</p>
                            </div>
                        </div>
                        <div className="header-btn">
                            <a className="btn"> {CoverPageHeaderConstants.downloadApp} </a>
                            <a className="btn"> {CoverPageHeaderConstants.magazineSubscribe} </a>
                            <a className="btn"> {CoverPageHeaderConstants.chemicalTodayTV} </a>
                        </div>
                    </div>

                </div>

                <div className='header-info'>
                    <p className='text-info'>
                        {CoverPageHeaderConstants.textInfo}
                    </p>
                </div>

                <div className='navigation'>
                    {CoverPageHeaderConstants.navElements.map((text: string) => (
                        <a className='item'>{text}</a>
                        // Use the below to route
                        // <Link className='item' to={'#'}>{ text } <Link/>
                    ))}
                </div>
            </header >
        </>
    );
};

export default CoverPageHeader;