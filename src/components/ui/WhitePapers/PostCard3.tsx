import './PostCard3.css';

interface PostCard3Props {
    imageSrc: string;
    altText: string;
    overlayText: string;
    redirectTo: string;
    widthInPx: string;
    postIndex: number;
}

const PostCard3: React.FC<PostCard3Props> = ({
    imageSrc,
    altText,
    overlayText,
    redirectTo,
    widthInPx,
    postIndex
}) => {

    const handleRedirectAndApiCall = async () => {
        console.log(redirectTo, postIndex);
    };

    const postStyle: React.CSSProperties = {
        width: widthInPx,
        display: 'flex',
        flexDirection: 'column',

    }

    return (
        <>
            <div style={postStyle} onClick={handleRedirectAndApiCall}>
                <img src={imageSrc} />
                <div className="img-text">
                    <p className='text'>{altText}</p>
                </div>
                <p className='overlay-text'>{overlayText}</p>
            </div>
        </>
    );
};

export default PostCard3;
