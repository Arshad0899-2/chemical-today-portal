import './Insider.css';
import Details from '../../components/ui/Details/Details';
import viewMore from '../../assets/home-page-assets/view-more.svg';
import Post from '../ui/Post/Post';

interface InsiderProps {
    postType: string;
    postTitle: string;
    postBy: string;
    postDate: string;
    sharePost: string;
    postImgUrl: string;
    postImgCap: string;
    postDesc: Array<string>;
    latest1: string;
    latest2: string;
    latest3: string;
    latest4: string;
    moreInsiders: Array<any>;
    isViewMore: Boolean;
    viewMoreHeading: string;
}

const Insider: React.FC<InsiderProps> = ({
    postType,
    postTitle,
    postBy,
    postDate,
    moreInsiders,
    postImgUrl,
    postImgCap,
    postDesc,
    latest1,
    latest2,
    latest3,
    latest4,
    isViewMore,
    viewMoreHeading
}) => {


    return (
        <>
            <div className='insider-body'>
                <div className='insider-details'>
                    <Details
                        postType={postType}
                        title={postTitle}
                        publishedCompany={postBy}
                        publishedDate={postDate}
                        postImg={postImgUrl}
                        postImgTitle={postImgCap}
                        postDesc={postDesc}
                    />
                </div>

                <div className='insider-xl-ads'>
                </div>

                <div className='insider-sidebar-ads'>
                    <div className='insider-latest-updates'>
                        Latest Updates
                    </div>
                    <div className='insider-latest'>
                        <div className='insider-updates'>
                            <a href='#'>{latest1}</a>
                        </div>
                        <div className='insider-updates'>
                            <a href='#'>{latest2}</a>
                        </div>
                        <div className='insider-updates'>
                            <a href='#'>{latest3}</a>
                        </div>
                        <div className='insider-updates insider-last-update'>
                            <a href='#'>{latest4}</a>
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
                <div className='insider-xl-ads'>
                </div>
            </div>

            {isViewMore && <div className='insider-post'>
                <div className='insider-post-heading'>
                    <h3 className='insider-post-heading-text'>{viewMoreHeading}</h3>
                    <a href='#' className='insider-viewMoreImg'>
                        <img src={viewMore} />
                    </a>
                </div>
                <div className='insider-post-items'>
                    <Post
                        redirectTo="/target-path/"
                        widthInPx="420px"
                        posts={moreInsiders}
                        isActive={false}
                    />
                </div>
            </div>}
        </>
    );
};

export default Insider;
