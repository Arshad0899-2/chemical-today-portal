import React from 'react';
import './CoverPage.css';
import CoverPageHeader from '../../components/Cover-page-Header/CoverPageHeader';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import posts from '../../utils/posts';
import Post from '../../components/ui/Post/Post';

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

                <div>

                </div>

                <div>

                </div>

                <div>

                </div>

            </div>
        </>
    );
};

export default CoverPage;