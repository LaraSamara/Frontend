import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/poert1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';

const Portfolio = () => {
    return (
        <section className='portfolio w-100'>
            <div className="container">
                <h1 className="text-uppercase text-center">portfolio component</h1>
                <div className="after my-4 d-flex align-items-center justify-content-center gap-2">
                    <div className="line"></div>
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <div className="line"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="card col-sm-12 col-md-3 border-0 mb-3  me-3 p-0">
                        <img src={image1} className="card-img-top" alt="image" />
                        <div className="hover">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-3 border-0 mb-3  me-3 p-0">
                        <img src={image2} className="card-img-top" alt="image" />
                        <div className="hover">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-3 border-0 mb-3  me-3 p-0">
                        <img src={image3} className="card-img-top" alt="image" />
                        <div className="hover">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-3 border-0 mb-3  me-3 p-0">
                        <img src={image1} className="card-img-top" alt="image" />
                        <div className="hover">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-3 border-0 mb-3  me-3 p-0">
                        <img src={image2} className="card-img-top" alt="image" />
                        <div className="hover">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-3 border-0 mb-3  me-3 p-0">
                        <img src={image3} className="card-img-top" alt="image" />
                        <div className="hover">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
