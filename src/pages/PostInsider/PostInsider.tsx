import './PostInsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import useScrollToTop from '../../services/useScrollToTop';
import Insider from '../../components/Insider/Insider';
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"

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



const PostInsider: React.FC = () => {

useScrollToTop();

    return (
        <>
            <div className='post-insider-main'>

                <img className='horizantal-ads' src={TempAds} alt="Advertize" />

                    <Insider 
                        postType = {postType}
                        postTitle = {postTitle}
                        postBy = {postBy}
                        postDate = {postDate}
                        sharePost = {sharePost}
                        postImgUrl = {postImgUrl}
                        postImgCap = {postImgCap}
                        postDesc = {postDesc}
                        latest1 = {latest1}
                        latest2 = {latest2}
                        latest3 = {latest3}
                        latest4 = {latest4}
                    />

                </div>
        </>
    );
};

export default PostInsider;
