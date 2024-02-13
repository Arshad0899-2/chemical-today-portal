import './PostInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';
import { sampleTest } from '../../utils/constants';

const PostInsider: React.FC = () => {

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
