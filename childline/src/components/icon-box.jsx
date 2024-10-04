import {BsTv} from 'react-icons/bs';
import '../sources/Bizland/js/main.js'
import '../sources/Bizland/css/style.css';
const IconBox=(props)=>{
    return(
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><BsTv className='featured-services-icon' /></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
    )
}

export default IconBox;
