import './Equipmentinsider.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import insider from '../../utils/insider';
import PostCard3 from '../../components/ui/WhitePapers/PostCard3';
import viewMore from '../../assets/home-page-assets/view-more.svg';
import equipimage from '../../assets/home-page-assets/equip_image.jpg';


const Equipmentinsider: React.FC = () => {
    const postDetails = insider;
    return (
        <>
            <div className='equip-insider-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div className="rectangle-box">
                    <p className="equip-text">Equipment</p>
                </div>
                <div className="equip-content">
                    {/* First div */}
                    <div className="equip-column">
                        <div className="equiptext">
                            Some text
                        </div>
                        <img className="equipimagee" src={equipimage} alt="Image" />
                    </div>
                    {/* Second div */}
                    <div className="equip-column">
                        <h2>Heading Text</h2>
                        <h3>Product Details</h3>
                        <p>Some product details here...</p>
                        <p>Some product details here...</p>
                        <p>Some product details here...</p>
                        <p>Some product details here...</p>
                        <p>Some product details here...</p>
                        <h3>Company Info</h3>
                        <p>Description</p>
                    </div>
                    {/* Third div */}
                    <div className="equip-column">
                        <div className="equiprectangular-box"></div>
                        <div className="equiprectangular-box"></div>
                        <div className="equiprectangular-box"></div>
                        <div className="equiprectangular-box"></div>
                    </div>
                </div>
                <div className='equip-insider-body'>
                    {/* Rest of your content */}
                </div>
            </div>
            <div className='equip'>
                <div className='equip-heading'>
                    <h3 className='equip-heading-text'>Equipment</h3>
                    <a href='#' className='equipviewMoreImg'>
                        <img src={viewMore} />
                    </a>
                </div>
            </div>

            <div className="equipApp">

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

export default Equipmentinsider;
