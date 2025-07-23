import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Start = () => {
    return (
        <section className='w-100 start text-white text-center'>
            <div className="container">
                <div className="img"></div>
                <h1 className="text-uppercase text-center">portfolio component</h1>
                <div className="after my-4 d-flex align-items-center justify-content-center gap-2">
                    <div className="line"></div>
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <div className="line"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
    )
}

export default Start
