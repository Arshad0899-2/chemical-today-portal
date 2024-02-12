import React from 'react';
import './CoverPage.css';
import CoverPageHeader from '../../components/Cover-page-Header/CoverPageHeader';
import TempAds from "../../assets/home-page-assets/temp-adv.png";

const CoverPage: React.FC = () => {

    return (
        <>
            <CoverPageHeader></CoverPageHeader>
            <div className='main-body'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
            </div>
        </>
    );
};

export default CoverPage;