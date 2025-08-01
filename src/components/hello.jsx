import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Hello() {
    return (
        <div style={{marginBottom:"7.5rem"}} >
            <div className="container my-5">
                <div className="row align-items-center justify-content-center gx-5">
                    {/* Image Column */}
                    <div className="col-12 col-md-4 text-center">
                        <img 
                            src="media/images/hello.png" 
                            alt="hello" 
                            className="img-fluid rounded-circle" 
                            style={{ maxWidth: "300px" }}
                        />
                    </div>

                    {/* Text Column */}
                    <div className="col-12 col-md-auto text-start text-md-center mt-4 mt-md-0">
                        <p className="mb-0">Hello I'm</p>
                        <h1 className="display-4 fw-bold">Sanjay</h1>
                        <h2 className="fs-4 text-secondary">Frontend Developer</h2>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-default-s btn-outline-dark rounded-pill px-3 py-2">Downlod CV</a>
                            <a href="#" className="btn btn-primary-s btn-default btn-dark rounded-pill px-3 py-2">Contact Info</a>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 px-5 mx-5 my-2">
                            <a href="https://www.linkedin.com/in/sanjay-gurugubelli-70ba57215" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-dark px-2 rounded-circle"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/Nick21131" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-dark px-2 rounded-circle"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
