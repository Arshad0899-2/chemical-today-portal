import React from 'react';
import './CasePage.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import Post from '../../components/ui/Post/Post';
import sideBarAds from '../../assets/home-page-assets/Post-assets/balnk_ads.svg'
import posts from '../../utils/posts';
// import { PostPageConstants } from "../../utils/constants";

const CasePage: React.FC = () => {

    const postDetails = posts;

    return (
        <>
            <img className='horizantal-ads' src={TempAds} alt="Advertize" />
            {/* <div>
                    <h2 className='post-heading'>{ PostPageConstants.title }</h2>
                </div> */}
            <div className="additional-content">
                <div className="rectangle-box">
                    <p className="post-type-text">Case Studies</p>
                </div>
                <div className="divider"></div>

            </div>



            <div className='post-body'>
                <div className="App">

                    <Post
                        redirectTo="/target-path/"
                        widthInPx="500px"
                        posts={postDetails}
                        isActive={false}
                    />
                    
                </div>
                <div className='post-ads-sidebar'>
                    <img src={sideBarAds} className='side-bar-ad' />
                    <img src={sideBarAds} className='side-bar-ad' />
                    <img src={sideBarAds} className='side-bar-ad' />
                    <img src={sideBarAds} className='side-bar-ad' />
                    <img src={sideBarAds} className='side-bar-ad' />
                    <img src={sideBarAds} className='side-bar-ad' />

                </div>
            </div>
        </>
    );
};

export default CasePage;