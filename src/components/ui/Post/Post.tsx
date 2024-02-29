import { useState, useEffect } from 'react';
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

    const [componentWidth, setComponentWidth] = useState(getWidth());

    // Function to determine component width based on window size
    function getWidth() {
        const width = window.innerWidth;
        if (width <= 768) return '250px';
        if (width <= 1024) return '280px';
        if (width <= 1440) return '300px';
        if (width <= 1500) return '310px';
        if (width <= 1626) return '400px';
        if (width <= 1670) return '380px';
        if (width <= 2000) return '500px';
        return '530px'; // default width for larger screens
    }

    // Effect to update width on window resize
    useEffect(() => {
        function handleResize() {
            setComponentWidth(getWidth());
        }

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRedirectAndApiCall = async () => {
        console.log(redirectTo);
    };

    const postStyle: React.CSSProperties = {
        width: componentWidth,
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
