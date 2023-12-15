import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//Handles the social media icons in the footer.
function SocialMedia( { src, icon, name }) {
    return (
        <a href={src} title={name} target="_blank">
            <FontAwesomeIcon className="i" icon={icon} />
        </a>
    )
}

export default SocialMedia;