import React from 'react';
import './CoverPage.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";

const CoverPage: React.FC = () => {

    return (
        <>
            <div className='main-body'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div>
                    <h2 className='post-heading'>Featured Post</h2>
                </div>
            </div>
        </>
    );
};

export default CoverPage;