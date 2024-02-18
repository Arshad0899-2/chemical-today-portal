import React from 'react';
import './Sustain1Page.css';
import mainBannerImage from "../../assets/header-assets/mainBannerImage.png";
import PostCard3 from '../../components/ui/WhitePapers/PostCard3';
import whites from '../../utils/whites';
import Rect2Img from '../../assets/WhitePaper/Rectangle 36.svg'
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';

const Sustain1Page: React.FC = () => {
    const postDetails = whites;
    return (
        <>
        <Header></Header>
            <div className='mainBanner'>
                <img className='mainBanner-image' src={mainBannerImage} alt="Main Banner" />
            </div>
            <div >
                <img className="horizontal-ads" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize" />
            </div>
            <div className="additional-content">
            <div className="rectangle-box">
            <p className="post-type-text">Digitalization</p>
            </div>
                <div className="divider"></div>
                
            </div>
            <div className="App">

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
                    <div className='image-container'>
                       <img src={Rect2Img} alt="Image 1" className="image"/>
                       <img src={Rect2Img} alt="Image 2" className="image"/>
                       <img src={Rect2Img} alt="Image 3" className="image"/>
                       <img src={Rect2Img}alt="Image 4" className="image"/>
    
             </div>
             <div className="App">

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
            <Footer></Footer>
                    
        </>
    );
};

export default Sustain1Page;


