import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="contact w-100 py-5">
            <div className="container">
                <h1 className="text-uppercase text-center">conatct section</h1>
                <div className="after my-4 d-flex align-items-center justify-content-center gap-2">
                    <div className="line"></div>
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <div className="line"></div>
                </div>
                <form action="" className="w-50 m-auto pt-3">
                    <div className="form-floating mb-3">
                        <input type="email" class="form-control" id="name" />
                            <label for="name">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" class="form-control" id="age" />
                            <label for="age">User Age</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" class="form-control" id="email" />
                            <label for="email">User Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" class="form-control" id="password" />
                            <label for="password">User Password</label>
                    </div>
                    <div className="btn btn-green text-white">Send Message</div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
