import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div style={{marginBottom:"6rem"}} id="about">
            <div className="container my-5">
                <div className="row text-center p-4 mb-3">
                    <p className="text-muted mb-0">Get To Know More</p>
                    <h1 className="fw-bold">About Me</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center flex-column flex-md-row">
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <img 
                            src="media/images/about.png" 
                            alt="about" 
                            className="img-fluid rounded-5" 
                            style={{ maxWidth: "300px" }} 
                        />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-flex justify-content-center justify-content-md-start gap-4 mb-3 flex-wrap">
                            {/* Experience Card */}
                            <div className="card p-3 text-center shadow-lg rounded-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faAward} className="fs-3 mb-2" />
                                    <h5 className="card-title fw-bold">Experience</h5>
                                    <p className="card-text text-muted mb-0">1+ years</p>
                                    <p className="card-text text-muted">Frontend Development</p>
                                </div>
                            </div>
                            {/* Education Card */}
                            <div className="card p-3 text-center shadow-lg rounded-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faGraduationCap} className="fs-3 mb-2" />
                                    <h5 className="card-title fw-bold">Education</h5>
                                    <p className="card-text text-muted mb-0">CSE Bachelor's Degree</p>
                                    <p className="card-text text-muted">A+ Grade</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-start mb-5">
                            I'm GURUGUBELLI SANJAY, a B.Tech student at Gayatri Vidya Parishad College of Engineering with a CGPA of 8.73/10. 
                            I'm passionate about web development and have been enthusiastically expanding my skills through courses like 
                            "The Complete 2023 Web Development Bootcamp" by Dr. Angela Yu on Udemy. My skills include Python, C++, and full-stack 
                            web development. I've also worked on projects using machine learning, such as classifying spam emails and air quality. 
                            During my internship at Prodigy Systems and Services, I gained hands-on experience working with Microsoft 365, AWS 
                            cloud services, and establishing a VPN for remote working.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
