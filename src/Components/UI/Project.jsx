import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Project( { src, alt, projectLink, projectTitle, gitHubLink}) {
    return (
        <div className="img-container">
            <img
                src={src}
                alt={alt}
                loading="lazy"
            />
            <div className="overlay">
                <div className="projects">
                    <a href={projectLink}>{projectTitle}</a>
                    <a href={gitHubLink}><FontAwesomeIcon className="icon" icon={faGithub} /> </a>
                </div>
            </div>
        </div>
    );
}

export default Project;