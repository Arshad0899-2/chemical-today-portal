import React from 'react';
import './PostPage.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import Post from '../../components/ui/Post/Post';
import sideBarAds from '../../assets/home-page-assets/Post-assets/balnk_ads.svg'
import posts from '../../utils/posts';
import { PostPageConstants } from "../../utils/constants";

const PostPage: React.FC = () => {

    const postDetails = posts;

    return (
        <>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div>
                    <h2 className='post-heading'>{ PostPageConstants.title }</h2>
                </div>

                <div className='post-body'>
                    <div className="App">

                        {postDetails.map((post, index) => (
                            <Post
                                imageSrc={post.url}
                                altText={post.heading}
                                overlayText={post.description}
                                redirectTo="/target-path/"
                                widthInPx="500px"
                                postIndex={index}
                            />

                        ))

                        }
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

export default PostPage;