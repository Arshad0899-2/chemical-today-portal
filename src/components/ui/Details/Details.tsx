import './Details.css';

interface DetailsProps {
    postType: string;
    title: string;
    publishedCompany: string;
    publishedDate: string;
    postImg: string;
    postImgTitle: string;
    postDesc: Array<string>;
}

const Details: React.FC<DetailsProps> = ({
    postType,
    title,
    publishedCompany,
    publishedDate,
    postImg,
    postImgTitle,
    postDesc

}) => {
    return (
        <>
            <div className="detail-type">
                <p className='details-insider-type'>{postType}</p>
            </div>
            <h1 className='detail-insider-title'>{title}</h1>
            <div className='detail-info'>
                <p>{publishedCompany}</p>
                <p>{publishedDate}</p>
                <div className='detail-share'>
                    <p>Share</p>
                    <div className='detail-share-btn'></div>
                    <div className='detail-share-btn'></div>
                    <div className='detail-share-btn'></div>
                </div>
            </div>
            <div className='detail-img-info'>
                <img className='detail-img' src={postImg} />
                <div>
                    <p className='detail-title'>{postImgTitle}</p>
                    <p className='detail-desc'>{postDesc[0]} <br /><br /> {postDesc[1]} <br /><br /> {postDesc[2]} </p>
                </div>
            </div>
        </>
    )
}

export default Details;