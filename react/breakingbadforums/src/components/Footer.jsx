import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import { Link } from "react-router-dom";
const Footer = () => {


    return (
        <footer>
        <p>Breaking Bad Wiki is a FANDOM TV Community.</p>
        <Link to="https://www.instagram.com/breakingbad" target="_blank">
        <img src={instagram} alt="login button" />
        </Link>

        <Link to="https://twitter.com/breakingbad" target="_blank">
        <img src={twitter} alt="login button" />
        </Link>

        <Link to="https://www.youtube.com/@breakingbad" target="_blank">
        <img src={youtube} alt="login button" />
        </Link>
        </footer>
    );
};

export default Footer;