import './SustainInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import insider from '../../utils/insider';
import Insider from '../../components/Insider/Insider';

const postType = "Industries";
const postTitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const postBy = "By Chemical Today";
const postDate = "01 March 2024";
const sharePost = "#";
const postImgUrl = blackImg;
const postImgCap = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const postDesc1 = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.";
const postDesc2 = "Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. ";
const postDesc3 = "Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry."
const postDesc: string[] = [postDesc1, postDesc2, postDesc3];
const latest1 = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.";
const latest2 = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.";
const latest3 = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.";
const latest4 = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is simply dummy text of the printing and typesetting industry.";
const moreInsiders: Array<any> = insider;
const viewMoreHeading = "Sustainability";

const SustainInsider: React.FC = () => {

    return (
        <>
            <div className='post-insider-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />

                <Insider
                    postType={postType}
                    postTitle={postTitle}
                    postBy={postBy}
                    postDate={postDate}
                    sharePost={sharePost}
                    postImgUrl={postImgUrl}
                    postImgCap={postImgCap}
                    postDesc={postDesc}
                    latest1={latest1}
                    latest2={latest2}
                    latest3={latest3}
                    latest4={latest4}
                    moreInsiders={moreInsiders}
                    isViewMore={true}
                    viewMoreHeading={viewMoreHeading}
                />
                
            </div>
        </>
    );
};

export default SustainInsider;
