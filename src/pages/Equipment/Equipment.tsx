import React from 'react';
import './Equipment.css';
import mainBannerImage from "../../assets/header-assets/mainBannerImage.png";
import PostCard3 from '../../components/ui/WhitePapers/PostCard3';
import whites from '../../utils/whites';
import viewMore from '../../assets/home-page-assets/view-more.svg';

const Equipment: React.FC = () => {
    const postDetails = whites;
    return (
        <>
            <div className='mainBannerEqp'>
                <img className='mainBannerEqp-image' src={mainBannerImage} alt="Main Banner" />
            </div>
            <div >
                <img className="horizontal-ads-eqp" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize" />
            </div>
            <div className='equipment-page'>
                    <div className='equipment-page-heading'>
                        <h3 className='equipment-page-heading-text'>Equipment</h3>
                    </div>
                    </div>
            <div className="equipmentAppPage">

                        {postDetails.map((postCard3, index) => (
                            <PostCard3
                                imageSrc={postCard3.url}
                                altText={postCard3.heading}
                                overlayText={postCard3.description}
                                redirectTo="/target-path/"
                                widthInPx="385px"
                                postIndex={index}
                            />

                        ))

                        }
                    </div>
                    <div >
                <img className="horizontal-ads-eqp" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize" />
            </div>
                    
             <div className="equipmentAppPage">

                        {postDetails.map((postCard3, index) => (
                            <PostCard3
                                imageSrc={postCard3.url}
                                altText={postCard3.heading}
                                overlayText={postCard3.description}
                                redirectTo="/target-path/"
                                widthInPx="385px"
                                postIndex={index}
                            />

                        ))

                        }
                    </div>
                    <a href='#' className='equipmentPageviewMoreImg'>
                            <img src={viewMore} />
                        </a>                    
        </>
    );
};

export default Equipment;


