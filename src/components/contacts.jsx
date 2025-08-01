import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contacts(){
    return(
        <div style={{marginTop:"10rem"}} id="contacts">
            <div className="container text-center my-5" style={{marginTop:"4rem"}}>
            <div className="row">
                <p className="text-muted">Get In Touch</p>
                <h1 className="fw-bold mb-5">Contact Me</h1>
            </div>
            <div className="d-flex justify-content-center gap-3">
                <a href="mailto:gurugubellisanjay007@gmail.com" className="btn btn-outline-dark rounded-pill d-flex align-items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    gurugubellisanjay007@gmail.com
                </a>
                <a href="www.linkedin.com/in/sanjay-gurugubelli-70ba57215" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-pill d-flex align-items-center gap-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                </a>
            </div>
            {/* The navigation links and copyright section have been added here */}
            <div className="mt-5">
                <ul className="nav justify-content-center gap-4">
                    <li className="nav-item">
                        <a className="nav-link text-dark fw-bold" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark fw-bold" href="#exp">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark fw-bold" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark fw-bold" href="#contacts">Contact</a>
                    </li>
                </ul>
                <p className="text-muted mt-3">Copyright © 2025 Sanjay. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    );
}
