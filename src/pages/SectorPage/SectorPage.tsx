import React from 'react';
import './SectorPage.css';
import PostCard2 from '../../components/ui/Sector/PostCard2';
import mainBannerImage from "../../assets/header-assets/mainBannerImage.png";
import cards from '../../utils/cards';

const SectorPage: React.FC = () => {
    return (
        <>
            <div className='mainBanner'>
                <img className='mainBanner-image' src={mainBannerImage} alt="Main Banner" />
                </div>
            <div >
            <img className="horizontal-ads" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize"></img>
            </div>
            <div>
                <h2 className="post-heading">Featured Products</h2>
            </div>
            <div className='sector-body'>
                <PostCard2 cards={cards} />
            </div>
        </>
    );
};

export default SectorPage;
