// Importing Font Awesome icons for use in this application
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// A project UI component that displays the image, and project links
function Project( { src, alt, projectLink, projectTitle, gitHubLink}) {
    return (
        // Image container with picture and overlay
        <div className="img-container">
            <img
                src={src}
                alt={alt}
                loading="lazy"
            />
            
            <div className="overlay">
                <div className="projects">
                    <a href={projectLink} target='_blank'>{projectTitle}</a>
                    <a href={gitHubLink} target='_blank'><FontAwesomeIcon className="icon" icon={faGithub} /> </a>
                </div>
            </div>
        </div>
    );
}

export default Project;