import React from 'react';
import './Spotlightmain.css';
import mainBannerImage from "../../assets/header-assets/mainBannerImage.png";
import PostCard3 from '../../components/ui/WhitePapers/PostCard3';
// import whites from '../../utils/whites';
import Rect2Img from '../../assets/WhitePaper/Rectangle 36.svg'
import Footer from '../../components/footer/Footer';
import Post from '../../components/ui/Post/Post';
import sideBarAds from '../../assets/home-page-assets/Post-assets/balnk_ads.svg'
import posts from '../../utils/posts';
import editorsChoice from "../../assets/home-page-assets/editors-choice.png";

const Spotlightmain: React.FC = () => {
    const postDetails = posts;
    
    
    return (
        <>
            <div className='mainBanner'>
                <img className='mainBanner-image' src={mainBannerImage} alt="Main Banner" />
            </div>
            <div >
                <img className="horizontal-ads" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize" />
            </div>
            <div className='spotlightmain'>
                    <div className='spotlightmain-heading'>
                        <h3 className='spotlightmain-heading-text'>Management</h3>
                        
                    </div>
                    </div>
            <div className="spotlightmainApp">

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
                    <div className='spotlightmainimage-container'>
                       <img src={Rect2Img} alt="spotlightmainImage 1" className="spotlightmainimage"/>
                       <img src={Rect2Img} alt="spotlightmainImage 2" className="spotlightmainimage"/>
                       <img src={Rect2Img} alt="spotlightmainImage 3" className="spotlightmainimage"/>
                       <img src={Rect2Img}alt="spotlightmainImage 4" className="spotlightmainimage"/>
    
             </div>

             <div className='spotlightmain'>
                    <div className='spotlightmain-heading'>
                        <h3 className='spotlightmain-heading-text'>Associations</h3>
                        
                    </div>
                    </div>
            <div className="spotlightmainApp">

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
                    <div className='spotlightmainimage-container'>
                       <img src={Rect2Img} alt="spotlightmainImage 1" className="spotlightmainimage"/>
                       <img src={Rect2Img} alt="spotlightmainImage 2" className="spotlightmainimage"/>
                       <img src={Rect2Img} alt="spotlightmainImage 3" className="spotlightmainimage"/>
                       <img src={Rect2Img}alt="spotlightmainImage 4" className="spotlightmainimage"/>
    
             </div>

             <div className='spotlightmain'>
                    <div className='spotlightmain-heading'>
                        <h3 className='spotlightmain-heading-text'>Plan Visit</h3>
                        
                    </div>
                    </div>

                    <div className='posts-body'>
                    <div className="postsApp">

                            <Post
                                redirectTo="/target-path/"
                                widthInPx="390px"
                                posts={postDetails}
                                isActive={false}
                            />
                            
                    </div>
                    <div className='posts-ads-sidebar'>
                        <img src={sideBarAds} className='postside-bar-ad' />
                        <img src={sideBarAds} className='postside-bar-ad' />
                        <img src={sideBarAds} className='postside-bar-ad' />
                        <img src={sideBarAds} className='postside-bar-ad' />
                        <img src={sideBarAds} className='postside-bar-ad' />
                        <img src={sideBarAds} className='postside-bar-ad' />

                    </div>
                </div>

                <div className='spotlightmain'>
                    <div className='spotlightmain-heading'>
                        <h3 className='spotlightmain-heading-text'>Editorial</h3>
                        
                    </div>
                    </div>

            <div className='spotlightmaineditor-choice-container'>
    <div className='spotlightmaineditor-choice'>
        <div className='spotlightmaineditor-choice-img'>
            {/* if <a> is replacing with <Link> the replace the style on line 74 */}
            <a href="#"><img src={editorsChoice} alt="Editor's Choice" /></a>
            <button className="spotlightmainview-more-btn">
                View More &gt;&gt;
            </button>
        </div>
        <div className='spotlightmaineditor-choice-img-side'>
            <div></div>
        </div>
    </div>
</div>

                    
        </>
    );
};

export default Spotlightmain;


