import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="about w-100 text-white">
            <h1 className="text-uppercase text-center">about component</h1>
            <div className="after my-4 d-flex align-items-center justify-content-center gap-2">
                <div className="line"></div>
                <FontAwesomeIcon icon={faStar} />
                <div className="line"></div>
            </div>
            <div className="row block m-auto">
                <p className="col-sm-12 col-md-6">
                    Freelancer is a free bootstrap theme created by Route. The download
                    includes the complete source files including HTML, CSS, and JavaScript
                    as well as optional SASS stylesheets for easy customization.
                </p>
                <p className="col-sm-12 col-md-6">
                    Freelancer is a free bootstrap theme created by Route. The download
                    includes the complete source files including HTML, CSS, and JavaScript
                    as well as optional SASS stylesheets for easy customization.
                </p>
            </div>
        </section>
    );
};

export default About;
