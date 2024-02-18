import './ProductInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';
import insider from '../../utils/insider';
import PostCard3 from '../../components/ui/WhitePapers/PostCard3';

const ProductInsider: React.FC = () => {
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
                        <p className="post-text">Productss</p>
                    </div>
                    <a href="your-url" className="learn-more">Learn more &gt;&gt;</a>
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
                                widthInPx="435px"
                                postIndex={index}
                            />

                        ))

                        }
                    </div>
        </>
    );
};

export default ProductInsider;
