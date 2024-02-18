import './../components/ui/Sector/PostCard2.css'; // Don't forget to create and import your CSS file
import RectImg from "../assets/Sector/Rectangle 10.png";

interface PostCard2Props {
    imageSrc: string;
    altText: string;
    heading: string;
    description: string;
    learnMoreUrl: string;
}

const cards: PostCard2Props[] = [
    {
        imageSrc: RectImg,
        altText: "Image One",
        heading: "Heading One",
        description: "Description for card one. This description provides information about the content of the card.",
        learnMoreUrl: "https://example.com/one"
    },
    {
        imageSrc: RectImg,
        altText: "Image Two",
        heading: "Heading Two",
        description: "Description for card two. This description provides information about the content of the card.",
        learnMoreUrl: "https://example.com/two"
    },
    {
        imageSrc: RectImg,
        altText: "Image Three",
        heading: "Heading Three",
        description: "Description for card three. This description provides information about the content of the card.",
        learnMoreUrl: "https://example.com/three"
    },
    // Add more card objects as needed
];

export default cards;
