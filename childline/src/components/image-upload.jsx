import React,{useState} from 'react';
import {BasicToast} from './toast';
const ImageAndTitle = ({ onDataSubmit }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [showToast,setShowToast]=useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = () => {
        //onDataSubmit({ title, image });
        setShowToast(true)
    };

    return (
        <>
            
            <p className='lead'>Specify a title</p>
            <input type="text" className="form-control" value={title} onChange={handleTitleChange} />
            <p className='lead'>Choose cover image</p>
            <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />
                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={handleSubmit} className="btn btn-outline-dark">Post Thread</button>
            </div>
            <BasicToast  show={showToast} closeCallback={()=>{setShowToast(false)}}>
                successfully saved post...
            </BasicToast>
            
        </>
    );
};

export default ImageAndTitle;