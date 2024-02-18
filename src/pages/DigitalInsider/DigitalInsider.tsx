import './DigitalInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';
import insider from '../../utils/insider';
import Post from '../../components/ui/Post/Post';

const DigitalInsider: React.FC = () => {
    const postDetails = insider;
    const PostInsiderConstant = PostInsiderConstants[0];

    return (
        <>
            <div className='post-insider-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div className='post-insider-body'>
                    <div className='post-details'>
                        <Details
                            postType={PostInsiderConstant.postType}
                            title={PostInsiderConstant.title}
                            publishedCompany={PostInsiderConstant.publishedCompany}
                            publishedDate={PostInsiderConstant.publishedDate}
                            share={PostInsiderConstant.share}
                            postImg={blackImg}
                            postImgTitle={PostInsiderConstant.PostImgTitle}
                            postDesc={PostInsiderConstant.postDesc}
                        />
                    </div>

                    <div className='sidebar-ads'>

                    </div>
                </div>
            </div>

            <div className="additional-content">
                <div className="content-container">
                    <div className="rectangle-box">
                        <p className="post-text">Digitalization</p>
                    </div>
                    <a href="your-url" className="learn-more">Learn more &gt;&gt;</a>
                </div>
                <div className="divider"></div>
            </div>

            <div className="disigal-insider-post">


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

export default DigitalInsider;