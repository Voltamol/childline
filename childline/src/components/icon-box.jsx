import {BsTv} from 'react-icons/bs';
const IconBox=(props)=>{
    return(
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><BsTv/></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
    )
}

export default IconBox;
