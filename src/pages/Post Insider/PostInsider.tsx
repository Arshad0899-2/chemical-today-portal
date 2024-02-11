import './PostInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';

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

                    </div>
                </div>
            </div>
        </>
    );
};

export default PostInsider;
