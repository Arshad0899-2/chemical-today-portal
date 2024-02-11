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
            <div className="post-type">
                <p className='post-type-text'>{postType}</p>
            </div>
            <h1 className='title'>{title}</h1>
            <div className='post-info'>
                <p>{publishedCompany}</p>
                <p>{publishedDate}</p>
                <div className='share'>
                    <p>{share}</p>
                    <div className='share-btn'></div>
                    <div className='share-btn'></div>
                    <div className='share-btn'></div>
                </div>
            </div>
            <div className='img-info'>
                <img className='post-img' src={postImg} />
                <div>
                    <p className='img-title'>{postImgTitle}</p>
                    <p className='post-desc'>{postDesc}</p>
                </div>
            </div>
        </>
    )
}

export default Details;