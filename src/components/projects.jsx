import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    return (
        <div style={{marginTop:"4rem"}} id="projects">
            <div className="container text-center">
                <div className="row ">
                    <p className="text-muted">Browse My Recent</p>
                    <h1 className="fw-bold">Projects</h1>
                </div>

                <div className="d-flex justify-content-center gap-4 flex-wrap" style={{ marginTop: '5rem' }}>
                    <div className="card p-4 text-center shadow-lg rounded-5" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <img src="media/images/vc.png" className="card-img-top mb-4 rounded-3" alt="Zoom App" style={{height:"160px"}} />
                            <h5 className="card-title fw-bold mb-3">Zoom App</h5>
                            {/* Fixed height for consistent card size */}
                            <p className="card-text text-muted" style={{ height: "100px" }}>A video conferencing web app built with React, WebRTC, and Socket.io, enabling real-time video, audio, and chat communication between users.</p>
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <a href="https://github.com/Nick21131/Zoom" className="btn btn-dark rounded-pill d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCode} />
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card p-4 text-center shadow-lg rounded-5" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <img src="media/images/zr.png" className="card-img-top mb-4 rounded-3" alt="Zerodha-clone" style={{height:"160px"}}/>
                            <h5 className="card-title fw-bold mb-3">Zerodha Clone</h5>
                            {/* Fixed height for consistent card size */}
                            <p className="card-text text-muted" style={{ height: "100px" }}>A full-stack Zerodha clone enabling users to simulate stock trading functionalities like orders, holdings, and positions using MERN stack technologies.</p>
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <a href="https://github.com/Nick21131/Zerodhaclone" className="btn btn-dark rounded-pill d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCode} />
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card p-4 text-center shadow-lg rounded-5" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <img src="media/images/rs.png" className="card-img-top mb-4 rounded-3" alt="Reccomendation System" style={{height:"160px"}} />
                            <h5 className="card-title fw-bold mb-3">Reccomendation System</h5>
                            {/* Fixed height for consistent card size */}
                            <p className="card-text text-muted" style={{ height: "100px" }}>Built a movie recommendation system addressing cold start using Bhattacharyya similarity and collaborative filtering in Streamlit.</p>
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <a href="https://github.com/Nick21131/A.C.I.R.S" className="btn btn-dark rounded-pill d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCode} />
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
