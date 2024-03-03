import './Insider.css';
import Details from '../../components/ui/Details/Details';

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
  }

const Insider: React.FC<InsiderProps> = ({
    postType,
    postTitle,
    postBy,
    postDate,
    sharePost,
    postImgUrl,
    postImgCap,
    postDesc,
    latest1,
    latest2,
    latest3,
    latest4
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
                        share={sharePost}
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
        </>
    );
};

export default Insider;
