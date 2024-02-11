import './PostInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants } from "../../utils/constants";

const PostInsider: React.FC = () => {

    return (
        <>
            <div className='post-insider-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div className='post-insider-body'>
                    <div className='post-details'>
                        <div className="post-type">
                            <p className='post-type-text'>{ PostInsiderConstants.postType }</p>
                        </div>
                        <h1 className='title'>{ PostInsiderConstants.title }</h1>
                        <div className='post-info'>
                            <p>{ PostInsiderConstants.publishedComapny }</p>
                            <p>{ PostInsiderConstants.publishedDate }</p>
                            <div className='share'>
                                <p>{ PostInsiderConstants.share }</p>
                                <div className='share-btn'></div>
                                <div className='share-btn'></div>
                                <div className='share-btn'></div>
                            </div>
                        </div>
                        <div className='img-info'>
                            <img  className='post-img' src={ blackImg } />
                            <div>
                                <p className='img-title'>{ PostInsiderConstants.imgTitle }</p>
                                <p className='post-desc'>{ PostInsiderConstants.postDesc }</p>
                            </div> 
                        </div>
                    </div>

                    <div className='sidebar-ads'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PostInsider;
