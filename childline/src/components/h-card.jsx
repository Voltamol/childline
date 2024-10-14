// h-card.jsx
import React from 'react';

const HCard = ({ title, content, coverImage, documentUrl }) => {
    return (
        <div className='row mb-1'>
            <div className='col-lg-2 col-md-2'>
                <img src={coverImage} className="img-fluid h-100 rounded-1" alt={title} />
            </div>
            <div className='col-lg-10 col-md-10'>
                <h5 className='d-flex'>{title}</h5>
                <p className='lead text-start'>
                    {content}
                </p>
                <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-2">Download Document</a>
            </div>
        </div>
    );
}

export default HCard;