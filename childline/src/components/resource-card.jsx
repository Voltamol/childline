import '../sources/Nova/css/main.css';
import blog1 from '../sources/Nova/img/blog/blog-3.jpg';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
const ResourceCard=(props)=>{
    return(
        <>
            
            <div class="col-xl-3 col-md-6 aos-init aos-animate my-3" data-aos="fade-up" data-aos-delay="100">
                <Link to='/'>
                    <div class="post-box text-dark">
                        <div class="post-img"><img src={blog1} class="img-fluid" alt=""/></div>
                        <div class="meta">
                        {/* <span class="post-date">Tue, December 12</span>
                        <span class="post-author"> / Julia Parker</span> */}
                        </div>
                        <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                        <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ResourceCard;