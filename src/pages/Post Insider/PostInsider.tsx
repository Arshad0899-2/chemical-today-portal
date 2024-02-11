import './PostInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"

const PostInsider: React.FC = () => {

    const postType: string = "Industries";
    const title:string = "We provide a web service on the example domain hosts to provide basic information on the purpose of the domain."
    const publishedComapny = "By Chemical Today";
    const publishedDate = "19 December 2023";
    const share = "Share";
    const imgTitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const postDesc = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry."

    return (
        <>
            <div className='post-insider-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div className='post-insider-body'>
                    <div className='post-details'>
                        <div className="post-type">
                            <p className='post-type-text'>{postType}</p>
                        </div>
                        <h1 className='title'>{ title }</h1>
                        <div className='post-info'>
                            <p>{publishedComapny}</p>
                            <p>{publishedDate}</p>
                            <div className='share'>
                                <p>{share}</p>
                                <div className='share-btn'></div>
                                <div className='share-btn'></div>
                                <div className='share-btn'></div>
                            </div>
                        </div>
                        <div className='img-info'>
                            <img  className='post-img' src={blackImg} />
                            <div>
                                <p className='img-title'>{ imgTitle }</p>
                                <p className='post-desc'>{ postDesc }</p>
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
