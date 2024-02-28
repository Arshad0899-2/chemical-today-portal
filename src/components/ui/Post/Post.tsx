import './Post.css';

interface PostProps {
    redirectTo: string;
    widthInPx: string;
    posts: Array<any>;
    isActive: Boolean;
}

const Post: React.FC<PostProps> = ({
    redirectTo,
    widthInPx,
    posts,
    isActive
}) => {

    const handleRedirectAndApiCall = async () => {
        console.log(redirectTo);
    };

    const postStyle: React.CSSProperties = {
        width: widthInPx,
        display: 'flex',
        flexDirection: 'column',
        // flex: '0 1 calc(33.333% - 10px)',
        marginBottom: '10px',
        flexGrow: 1
   }

    const sidePostStyle: React.CSSProperties = {
        width: widthInPx,
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 calc(50% - 10px)',
        // marginRight: '15px',
        marginBottom: '10px',
        flexGrow: 1

    }

    const postDetails = posts;

    return (
        <>
         {/* Changing the margin based on the isActive prop 
             if posts has side-bar (ads) the isActive is flase
             or else isActive is true */ }

            {postDetails.map((post) => (

                < div style={ isActive ? sidePostStyle : postStyle }  onClick={handleRedirectAndApiCall} >
                    <img src={post.url} />
                    <div className="img-text">
                        <p className='text'>{post.heading}</p>
                    </div>
                    {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                    <p className='overlay-text'>{post.description}</p>
                </div >
            ))

            }
        </>
    );
};

export default Post;
