import React from 'react';
import './PostPage.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import Post from '../../components/ui/Post/Post';
import sideBarAds from '../../assets/home-page-assets/Post-assets/balnk_ads.svg'
import posts from '../../utils/posts';
import { PostPageConstants } from "../../utils/constants";
import useScrollToTop from '../../services/useScrollToTop';

const PostPage: React.FC = () => {

    const postDetails = posts;

    useScrollToTop();

    return (
        <>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div>
                    <h2 className='text-2xl font-semibold post-heading'>{ PostPageConstants.title }</h2>
                </div>

                <div className='post-body-cont'>
                    <div className="post-cards">

                            <Post
                                redirectTo="/post-insider/"
                                widthInPx="auto"
                                posts={postDetails}
                                isActive={true}
                            />
                            
                    </div>
                    <div className='post-ads-cont'>
                        <img src={sideBarAds} className='side-bar-ad' />
                        <img src={sideBarAds} className='side-bar-ad' />
                        <img src={sideBarAds} className='side-bar-ad' />

                    </div>
                </div>
        </>
    );
};

export default PostPage;