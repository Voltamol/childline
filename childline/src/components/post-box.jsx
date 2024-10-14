// post-box.jsx
import '../sources/Nova/css/main.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PostBox = ({ thread_id, title, content, coverImage, author, createdAt }) => {
    const navigate = useNavigate();

    const handleReadMoreClick = () => {
        // Set the thread_id in cookies
        Cookies.set('thread_id', thread_id, { expires: 7 }); // Expires in 7 days
        navigate('/blog-details'); // Navigate to blog details page
    };

    return (
        <div className="col-xl-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="post-box">
                <div className="post-img">
                    <img src={coverImage} className="img-fluid" alt={title} />
                    {/* new Date(createdAt).toLocaleDateString() */}
                </div>
                <div className="meta">
                    <span className="post-date">{createdAt}</span>
                    <span className="post-author"> / {author}</span>
                </div>
                <h3 className="post-title">{title}</h3>
                <p>{
                    
                    content.slice(0, 100)
                    }...</p>
                <Link to="/blog-details" className="readmore stretched-link" onClick={handleReadMoreClick}>
                    <span>Read More</span><i className="bi bi-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}

export default PostBox;