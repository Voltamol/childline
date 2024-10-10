import '../sources/Nova/css/main.css';
import blog1 from '../sources/Nova/img/blog/blog-1.jpg';
import { Link } from 'react-router-dom';
const PostBox=(props)=>{
    return(
        <div className="col-xl-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="post-box">
                <div className="post-img"><img src={blog1} className="img-fluid" alt=""/></div>
                <div className="meta">
                <span className="post-date">Tue, December 12</span>
                <span className="post-author"> / Julia Parker</span>
                </div>
                <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default PostBox;