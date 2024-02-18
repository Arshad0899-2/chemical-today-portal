import React from 'react';
import './PostCard2.css'; // Don't forget to create and import your CSS file

interface PostCard2Props {
    cards: {
        imageSrc: string;
        altText: string;
        heading: string;
        description: string;
        learnMoreUrl: string;
    }[];
}

const PostCard2: React.FC<PostCard2Props> = ({ cards }) => {
    return (
        <>
            {cards.map((card, index) => (
                <div className="post-card2" key={index}>
                    <img src={card.imageSrc} alt={card.altText} className="image" />
                    <div className="content">
                        <h2 className="heading">{card.heading}</h2>
                        <p className="description">{card.description}</p>
                        <a className="learn-more" href={card.learnMoreUrl}>Learn more &gt;&gt; </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PostCard2;
