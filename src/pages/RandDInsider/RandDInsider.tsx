import './RandDInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';
import insider from '../../utils/insider';
import Post from '../../components/ui/Post/Post';

const RandDInsider: React.FC = () => {
    const postDetails = insider;
    return (
        <>
            <div className='post-insider-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div className='post-insider-body'>
                    <div className='post-details'>
                        <Details
                            postType={PostInsiderConstants.postType}
                            title={PostInsiderConstants.title}
                            publishedCompany={PostInsiderConstants.publishedCompany}
                            publishedDate={PostInsiderConstants.publishedDate}
                            share={PostInsiderConstants.share}
                            postImg={blackImg}
                            postImgTitle={PostInsiderConstants.PostImgTitle}
                            postDesc={PostInsiderConstants.postDesc}
                        />
                    </div>

                    <div className='sidebar-ads'>

                    </div>
                </div>
            </div>

            <div className="additional-content">
                <div className="content-container">
                    <div className="rectangle-box">
                        <p className="post-text">R&D</p>
                    </div>
                    <a href="your-url" className="learn-more">Learn more &gt;&gt;</a>
                </div>
                <div className="divider"></div>
            </div>

            <div className="rand-insider-post">

                <Post
                    redirectTo="/target-path/"
                    widthInPx="420px"
                    posts={postDetails}
                    isActive={false}
                />
            </div>
        </>
    );
};

export default RandDInsider;
