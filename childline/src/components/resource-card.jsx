// resource-card.jsx
import '../sources/Nova/css/main.css';
import { Link } from 'react-router-dom';

const ResourceCard = ({ title, content, coverImage, document }) => {
    return (
        <div className="col-xl-3 col-md-6 aos-init aos-animate my-3" data-aos="fade-up" data-aos-delay="100">
            <Link to={document} target="_blank" rel="noopener noreferrer">
                <div className="post-box text-dark">
                    <div className="post-img">
                        <img src={coverImage} className="img-fluid" alt={title} />
                    </div>
                    <div className="meta"></div>
                    <h3 className="post-title">{title}</h3>
                    <p>{content}</p>
                </div>
            </Link>
        </div>
    );
}

export default ResourceCard;