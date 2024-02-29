import React from 'react';
import './DigitPage.css';
import mainBannerImage from "../../assets/header-assets/mainBannerImage.png";
import PostCard3 from '../../components/ui/WhitePapers/PostCard3';
import whites from '../../utils/whites';
import Rect2Img from '../../assets/WhitePaper/Rectangle 36.svg'

const DigitPage: React.FC = () => {
    const postDetails = whites;
    return (
        <>
            <div className='mainBanner'>
                <img className='mainBanner-image' src={mainBannerImage} alt="Main Banner" />
            </div>
            <div >
                <img className="horizontal-ads" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize" />
            </div>
            <div className='digit'>
                    <div className='digit-heading'>
                        <h3 className='digit-heading-text'>Digitalization</h3>
                    </div>
                    </div>
            <div className="digitApp">

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
                    <div className='digitimage-container'>
                       <img src={Rect2Img} alt="Image 1" className="digitimage"/>
                       <img src={Rect2Img} alt="Image 2" className="digitimage"/>
                       <img src={Rect2Img} alt="Image 3" className="digitimage"/>
                       <img src={Rect2Img}alt="Image 4" className="digitimage"/>
    
             </div>
             <div className="digitApp">

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
                    
        </>
    );
};

export default DigitPage;


