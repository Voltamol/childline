import React, { useState } from 'react';
import { BasicToast } from './toast';

const ImageAndTitle = ({ onDataSubmit,toastMessage }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = () => {
        onDataSubmit({ title, content: '', image});
        setShowToast(true);
    };

    return (
        <>
            <div className='d-flex justify-content-end fixed-top z-3 py-2 pe-2 bg-white'>
                <button onClick={handleSubmit} className="btn btn-outline-dark">Post Thread</button>
                <span className="mx-2"></span>
                <button  className="btn btn-outline-secondary">Save As Draft</button>

            </div>
            <p className='lead'>Specify a title</p>
            <input type="text" className="form-control" value={title} onChange={handleTitleChange} />
            {/* <p className='lead'>Specify Author ID</p>
            <input type="text" className="form-control" value={authorId} onChange={handleAuthorIdChange} /> */}
            <p className='lead'>Choose cover image</p>
            <div className="input-group mb-3">
                <input type="file" className="form-control" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />
                <label className="input-group-text">Upload</label>
            </div>
            

            <BasicToast show={showToast} closeCallback={() => { setShowToast(false); }}>
                {toastMessage}
            </BasicToast>
        </>
    );
};

export default ImageAndTitle;