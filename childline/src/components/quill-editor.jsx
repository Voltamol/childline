// QuillEditor.js
import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import the styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '../custom scrollbar.css'; //
import {BasicToast} from './toast';
const QuillEditor = ({ onChange }) => {
    const [editorHtml, setEditorHtml] = useState('');
    const [showToast,setShowToast]=useState(false);

    const handleChange = (html) => {
        setEditorHtml(html);
        onChange(html); // Call the passed function to update content
    };

    const handleSave = () => {
        localStorage.setItem('editorContent', editorHtml);
        setShowToast(true)
    };

    useEffect(() => {
        // Fetch content from localStorage(will be using an API for this later)
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            setEditorHtml(savedContent);
        }
    }, []);

    
    return (
        <>
            
            <div className='pb-5'>
                <p className='lead'>Edit Content</p>
                {/* <h2 style={{fontWeight:'bolder',color:'GrayText'}}>Share your knowledge with our community</h2> */}
                
                <ReactQuill 
                    value={editorHtml} 
                    onChange={handleChange} 
                    modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                            ['bold', 'italic', 'underline'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['link', 'image'],
                            ['clean'] // Remove formatting button
                        ],
                    }}
                    theme="snow" 
                    style={{ height: '300px' }} 
                />
                  
            </div>
            <br/>
            {/* <div className='d-flex justify-content-end'>
                <button onClick={handleSave} className='btn btn-outline-dark w-25 rounded-1 mb-1'>Save Content</button>
            </div> */}
        </>
        
    );
};

const ReadOnlyQuill=(props)=>{
    return(
        <ReactQuill
                value={props.content}
                readOnly={true} // Set to true for read-only view
                modules={{
                    toolbar: false // Disable toolbar for read-only

                }}
                style={{ height: '100%',width:'100%'}} 
        />
    )
}

export {QuillEditor,ReadOnlyQuill};