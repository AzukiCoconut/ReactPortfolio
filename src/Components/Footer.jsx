import SocialMedia from './UI/SocialMedia';
import { fab, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// the footer component
function Footer() {
    return (
        <footer className="bg-dark-test p-3">
            <div className="container-lg m-auto d-flex justify-content-center">
                <SocialMedia key={1} src="https://github.com/AzukiCoconut" icon={faGithub} name="Github" />
                <SocialMedia key={2} src="https://www.instagram.com/itfiguresasmuch/" icon={faInstagram} name="Instagram" />
                <SocialMedia key={3} src="https://www.linkedin.com/in/matthewtingleycma/" icon={faLinkedin} name="Linkedin"/>
            </div>
        </footer>
    );
}

export default Footer;