import React, { useState } from 'react';
import { BasicToast } from './toast';

const ImageAndTitle = ({ onDataSubmit }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [authorId, setAuthorId] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleAuthorIdChange = (e) => {
        setAuthorId(e.target.value);
    };

    const handleSubmit = () => {
        onDataSubmit({ title, content: '', image, authorId });
        setShowToast(true);
    };

    return (
        <>
            <p className='lead'>Specify a title</p>
            <input type="text" className="form-control" value={title} onChange={handleTitleChange} />
            <p className='lead'>Specify Author ID</p>
            <input type="text" className="form-control" value={authorId} onChange={handleAuthorIdChange} />
            <p className='lead'>Choose cover image</p>
            <div className="input-group mb-3">
                <input type="file" className="form-control" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />
                <label className="input-group-text">Upload</label>
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={handleSubmit} className="btn btn-outline-dark">Post Thread</button>
            </div>
            <BasicToast show={showToast} closeCallback={() => { setShowToast(false); }}>
                Successfully saved post...
            </BasicToast>
        </>
    );
};

export default ImageAndTitle;