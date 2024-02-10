import React from 'react';
import './Header.css';
import companyLogo from "../../assets/header-assets/company-logo.svg";
import magzineCover from "../../assets/header-assets/magzine_cover.png";

const Header: React.FC = () => {

    const textInfo: string = "- Pearl Polyurethane, Covestro sign climate-neutral MDI supply deal AkzoNobel to expand water-based texture paints capacity in China - HRS showcases restart of the chemical industry in India";
    const navElements = [
        'Posts', 'Sectors', 'Insights', 'Spotlight', 'Product', 'Events', 'Equipment', 'Sustainability', 'Digitalization'];

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
                            <p className='readMoreTest'>Pharma industry to boost piperidine demand with 99 percent purity</p>
                            <div className='read-more-button'>
                                <p>Read here</p>
                                <p className='arrow'>&rarr;</p>
                            </div>
                        </div>



                        <div className="header-btn">
                            <a className="btn">Download the App</a>
                            <a className="btn">Magazine Subscribe</a>
                            <a className="btn">Chemical Today TV</a>
                        </div>


                    </div>
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
            </header >
        </>
    );
};

export default Header;