import React from 'react';
import './CoverPage.css';
import CoverPageHeader from '../../components/Cover-page-Header/CoverPageHeader';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import posts from '../../utils/posts';
import Post from '../../components/ui/Post/Post';
import viewMore from '../../assets/home-page-assets/view-more.svg';
import greyImg from '../../assets/home-page-assets/grayTempImg.svg';
import squareAd from '../../assets/home-page-assets/squareGray.svg';
import blueAds from "../../assets/home-page-assets/Post-assets/balnk_ads.svg";

const CoverPage: React.FC = () => {

    const postDetails = posts;

    return (
        <>
            <CoverPageHeader></CoverPageHeader>

            <img className='horizantal-ads' src={TempAds} alt="Advertize" />
            <div className='main-body'>

                <div>

                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Post</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-post-items'>

                        <Post
                            redirectTo="/target-path/"
                            widthInPx="420px"
                            posts={postDetails}
                            isActive={true}
                        />
                    </div>
                    <div className='cover-post-ads'>

                    </div>
                </div>

                <div>

                </div>

                <div>

                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Products</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-post-items'>
                        <Post
                            redirectTo="/target-path/"
                            widthInPx="420px"
                            posts={postDetails}
                            isActive={true}
                        />
                    </div>
                </div>

                <div>

                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Event</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-event-body'>
                        <div className='cover-event-body-img'>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                        </div>
                        <div className='event-ads'>
                            <img src={squareAd} className='event-ads-img' />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Sustainability</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-sustainability-body'>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <div className='sustain-ads'>
                            <img src={blueAds} className='sustain-ads-img' />
                        </div>
                    </div>

                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Digitalization</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-post-items'>
                        <Post
                            redirectTo="/target-path/"
                            widthInPx="420px"
                            posts={postDetails}
                            isActive={true}
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default CoverPage;