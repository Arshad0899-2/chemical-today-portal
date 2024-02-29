import React from 'react';
import './CoverPageHeader.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";
import magzineCover from "../../assets/header-assets/magzine_cover.png";
import { CoverPageHeaderConstants } from "../../utils/constants";
import { Link } from 'react-router-dom';

const CoverPageHeader: React.FC = () => {

    return (
        <>
            <header className="header">

                <div className='header-top'>

                    <div className='logo-container'>
                        <img className="logo" src={companyLogo} alt="Chemical Today" />
                    </div>

                    <div className="header-actions">
                        <div className='header-divider'></div>
                        <img className="magazineCoverImg" src={magzineCover} alt="magazine cover" />
                        <div className='read-more'>
                            <p className='readMoreTest'> {CoverPageHeaderConstants.readMoreText} </p>
                            <Link to='/editorial'>
                                <div className='read-more-button'>
                                    <p> {CoverPageHeaderConstants.readHere}</p>
                                    <p className='arrow'>&rarr;</p>
                                </div>
                            </Link>
                        </div>
                        <div className="header-btn">
                            <a className="header-util-btn"> {CoverPageHeaderConstants.downloadApp} </a>
                            <a className="header-util-btn"> {CoverPageHeaderConstants.magazineSubscribe} </a>
                            <a className="header-util-btn"> {CoverPageHeaderConstants.chemicalTodayTV} </a>
                        </div>
                    </div>

                </div>

                <div className='header-info'>
                    <p className='text-info'>
                        {CoverPageHeaderConstants.textInfo}
                    </p>
                </div>

                <div className='navigation'>
                    <Link to={'posts'} className='item'>Posts</Link>
                    <div className="dropdown dropdown-down">
                        <div tabIndex={0} role="button" className="item font-medium">Sectors</div>
                        <div tabIndex={0} className="dropdown-content mt-5 transform -translate-x-[9%] menu-horizontal bg-[#E8F1FC] py-5 dropdown-container">
                            <div className='insights-menu mr-40'>
                                <Link to={'#'} className='insights-menu-item'>Plastic & Polymers</Link>
                                <Link to={'#'} className='insights-menu-item'>Rubber</Link>
                                <Link to={'#'} className='insights-menu-item'>Specialty Chemicals</Link>
                                <Link to={'#'} className='insights-menu-item'>Fine/Basic Chemicals</Link>
                                <Link to={'#'} className='insights-menu-item'>Food Additives/Emulsifiers</Link>
                                <Link to={'#'} className='insights-menu-item'>Sugar</Link>
                                <Link to={'#'} className='insights-menu-item'>Health</Link>
                                <Link to={'#'} className='insights-menu-item'>Dairy</Link>
                                <Link to={'#'} className='insights-menu-item'>Cosmetics</Link>
                                <Link to={'#'} className='insights-menu-item'>Soups & Detergents</Link>
                                <Link to={'#'} className='insights-menu-item'>Surfactants</Link>
                                <Link to={'#'} className='insights-menu-item'>Enzyms & Hormones</Link>
                                <Link to={'#'} className='insights-menu-item'>Paint & Cosatings</Link>
                            </div>
                            <div className='insights-menu mr-40'>
                                <Link to={'#'} className='insights-menu-item'>Flavours & Fragrances</Link>
                                <Link to={'#'} className='insights-menu-item'>Cleaning & Sanitation</Link>
                                <Link to={'#'} className='insights-menu-item'>Biocides</Link>
                                <Link to={'#'} className='insights-menu-item'>Oil & Gas</Link>
                                <Link to={'#'} className='insights-menu-item'>Petrochemicals</Link>
                                <Link to={'#'} className='insights-menu-item'>Oleochemicals</Link>
                                <Link to={'#'} className='insights-menu-item'>Lubricants</Link>
                                <Link to={'#'} className='insights-menu-item'>Fluids/Fuels</Link>
                                <Link to={'#'} className='insights-menu-item'>Surface and Coating</Link>
                                <Link to={'#'} className='insights-menu-item'>Adhesives and Sealants</Link>
                                <Link to={'#'} className='insights-menu-item'>Eectroplating</Link>
                                <Link to={'#'} className='insights-menu-item'>Metal Treatment</Link>
                                <Link to={'#'} className='insights-menu-item'>Construction</Link>
                            </div>
                            <div className='insights-menu'>
                                <Link to={'#'} className='insights-menu-item'>Aerosols</Link>
                                <Link to={'#'} className='insights-menu-item'>Industrial Gases</Link>
                                <Link to={'#'} className='insights-menu-item'>Gas Transport</Link>
                                <Link to={'#'} className='insights-menu-item'>Flavours & Fragrances</Link>
                                <Link to={'#'} className='insights-menu-item'>Cleaning & Sanitation</Link>
                                <Link to={'#'} className='insights-menu-item'>Biocides</Link>
                                <Link to={'#'} className='insights-menu-item'>Oil & Gas</Link>
                                <Link to={'#'} className='insights-menu-item'>Petrochemicals</Link>
                                <Link to={'#'} className='insights-menu-item'>Olechemicals</Link>
                                <Link to={'#'} className='insights-menu-item'>Lubricants</Link>
                                <Link to={'#'} className='insights-menu-item'>Fluids/Fuels</Link>
                                <Link to={'#'} className='insights-menu-item'>Surface and coating</Link>
                                <Link to={'#'} className='insights-menu-item'>Adhesives and Sealants</Link>
                            </div>
                        </div>


                    </div>
                    <Link to={'#'} className='item'>Insights</Link>
                    <Link to={'spotlight'} className='item'>Spotlight</Link>
                    <Link to={'#'} className='item'>Product</Link>
                    <Link to={'events'} className='item'>Events</Link>
                    <Link to={'equipment'} className='item'>Equipment</Link>
                    <Link to={'sustainability'} className='item'>Sustainability</Link>
                    <Link to={'digitalization'} className='item'>Digitalization</Link>
                </div>
            </header >

        </>
    );
};

export default CoverPageHeader;