
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg mb-5 text-center" style={{ backgroundColor: "white" }}>
            <div className="container p-2 mb-5">
                {/* Brand Name on the far left */}
                <a className="navbar-brand me-auto mx-5 " href="/">
                    <p className="fs-3" style={{ fontFamily: "'Playwrite PL', cursive" }}>Sanjay</p>
                </a>

                {/* Toggler for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link " aria-current="page" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#exp" >
                                Experience
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#projects" >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#contacts">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}