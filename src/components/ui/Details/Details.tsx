import './Details.css';

interface DetailsProps {
    postType: string;
    title: string;
    publishedCompany: string;
    publishedDate: string;
    share: string;
    postImg: string;
    postImgTitle: string;
    postDesc: string;
}

const Details: React.FC<DetailsProps> = ({
    postType,
    title,
    publishedCompany,
    publishedDate,
    share,
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
                    <p>share</p>
                    <div className='detail-share-btn'></div>
                    <div className='detail-share-btn'></div>
                    <div className='detail-share-btn'></div>
                </div>
            </div>
            <div className='detail-img-info'>
                <img className='detail-img' src={postImg} />
                <div>
                    <p className='detail-title'>{postImgTitle}</p>
                    <p className='detail-desc'>{postDesc}</p>
                </div>
            </div>
        </>
    )
}

export default Details;