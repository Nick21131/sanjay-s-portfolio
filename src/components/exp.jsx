import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Exp() {
    return (
        <div style={{marginBottom:"10rem"}} id="exp">
            <div className="container text-center my-5">
                <div className="row" style={{lineHeight:"1"}}>
                    <p className="text-muted">Explore My</p>
                    <h1 className="fw-bold">Experience</h1>
                </div>
                <div className="d-flex justify-content-center gap-4 flex-wrap mt-3" style={{ marginTop: '5rem' }}>
                    {/* Frontend Development Card */}
                    <div className="card p-4 text-center shadow-lg rounded-5" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-4">Frontend Development</h5>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">HTML</h6>
                                                    <small className="text-muted">Experienced</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Bootstrap</h6>
                                                    <small className="text-muted">Intermediate</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">React</h6>
                                                    <small className="text-muted">Intermediate</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">CSS</h6>
                                                    <small className="text-muted">Experienced</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">JavaScript</h6>
                                                    <small className="text-muted">Intermediate</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Material UI</h6>
                                                    <small className="text-muted">Basic</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend Development Card */}
                    <div className="card p-4 text-center shadow-lg rounded-5" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-4">Backend Development</h5>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">My SQL</h6>
                                                    <small className="text-muted">Experienced</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">MongoDB</h6>
                                                    <small className="text-muted">Basic</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Git</h6>
                                                    <small className="text-muted">Intermediate</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Node JS</h6>
                                                    <small className="text-muted">Intermediate</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Express JS</h6>
                                                    <small className="text-muted">Intermediate</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
