import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="w-100">
            <div className="container">
                <section className="upper row align-items-start">
                    <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center flex-column gap-2">
                        <h3 className="">LOCATION</h3>
                        <p className="">2215 John Daniel Drive</p>
                        <p className="">Clark, MO 65243</p>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center flex-column gap-2">
                        <h3 className="">AROUND THE WEB</h3>
                        <div className="icons d-flex gap-2">
                                <span>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faGlobe} />
                                </span>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center flex-column gap-2">
                        <h3 className="">ABOUT FREELANCER</h3>
                        <p className="text-center">
                            Freelance is a free to use, licensed Bootstrap theme created by
                            Route
                        </p>
                    </div>
                </section>
            </div>
            <section className="lower text-center py-5">
                Copyright © Your Website 2021
            </section>
        </footer>
    );
};

export default Footer;
