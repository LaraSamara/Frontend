import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-4 w-100">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Start Framework
                </NavLink>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" aria-current="page" to="about">
                                about
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link " aria-current="page" to="portfolio">
                                portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link " aria-current="page" to="contact">
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
