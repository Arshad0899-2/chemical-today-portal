import './PostInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';
import { sampleTest } from '../../utils/constants';

const PostInsider: React.FC = () => {

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
                        <div>
                            <div className='latest-updates'>
                                Latest Updates
                            </div>
                            <div className='updates'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <div className='updates'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <div className='updates'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <div className='updates last-update'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                        </div>
                        <div className='insider-ads'>
                            <div className='indiser-ad-div'>
                            </div>
                            <div className='indiser-ad-div'>
                            </div>
                            <div className='indiser-ad-div'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostInsider;
