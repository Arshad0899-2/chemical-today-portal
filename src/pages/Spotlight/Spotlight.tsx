import './Spotlight.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import blackImg from "../../assets/home-page-assets/Post-assets/blank_img.svg"
import { PostInsiderConstants_1 } from "../../utils/constants";
import Details from '../../components/ui/Details/Details';
import { sampleTest } from '../../utils/constants';
import editorsChoice from "../../assets/home-page-assets/editors-choice.png";
import viewMore from '../../assets/home-page-assets/view-more.svg';

const Spotlight: React.FC = () => {

    return (
        <>
            <div className='spotlight-page-main'>
                <img className='horizantal-ads' src={TempAds} alt="Advertize" />
                <div className='spotlight-page-body'>
                    <div className='spotlight-page-details'>
                        <Details
                            postType={PostInsiderConstants_1.postType}
                            title={PostInsiderConstants_1.title}
                            publishedCompany={PostInsiderConstants_1.publishedCompany}
                            publishedDate={PostInsiderConstants_1.publishedDate}
                            share={PostInsiderConstants_1.share}
                            postImg={blackImg}
                            postImgTitle={PostInsiderConstants_1.PostImgTitle}
                            postDesc={PostInsiderConstants_1.postDesc}
                        />
                        <a href='#' className='spotlightPageviewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>

                    <div className='spotlightPagesidebar-ads'>
                        <div>
                            <div className='spotlightPagelatest-updates'>
                                Management
                            </div>

                            <div className='spotlight-page-ad-div'>
                            </div>
                            <div className='spotlightPageupdates'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <div className='spotlight-page-ad-div'>
                            </div>

                            <div className='spotlightPageupdates last-update'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <a href='#' className='spotlightPageviewMoreImg'>
                                <img src={viewMore} />
                            </a>

                            <div className='spotlightPagelatest-updates'>
                                Associations
                            </div>

                            <div className='spotlightPageindiser-ad-div'>
                            </div>
                            <div className='spotlightPageupdates'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <div className='spotlight-page-ad-div'>
                            </div>

                            <div className='spotlightPageupdates last-update'>
                                <a href='#'>{sampleTest}</a>
                            </div>
                            <a href='#' className='spotlightPageviewMoreImg'>
                                <img src={viewMore} />
                            </a>


                        </div>

                    </div>
                </div>
            </div>

            <div className='spotlightPage'>
                <div className='spotlight-page-heading'>
                    <h3 className='spotlight-page-heading-text'>Editorial</h3>

                </div>
            </div>


            <div className='spotlightPageeditor-choice-container'>
                <div className='spotlightPageeditor-choice'>
                    <div className='spotlightPageeditor-choice-img'>
                        {/* if <a> is replacing with <Link> the replace the style on line 74 */}
                        <a href="#"><img src={editorsChoice} alt="Editor's Choice" /></a>
                        <button className="spotlightPageview-more-btn">
                            View More &gt;&gt;
                        </button>
                    </div>
                    <div className='spotlightPageeditor-choice-img-side'>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Spotlight;
