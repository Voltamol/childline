import { QuillEditor } from "../quill-editor";
import Footer from "../footer";
import ImageAndTitle from "../image-upload";
import Stack from "react-bootstrap/esm/Stack";
import Navigation from "../navigation";
import { useState } from "react";
import axios from 'axios';

const ForumEditsPage = (props) => {
    const [editorContent, setEditorContent] = useState('');

    const handleDataSubmit = async ({ title, image, authorId }) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', editorContent);
        formData.append('author', authorId);
        formData.append('cover_image', image);

        try {
            const response = await axios.post('http://localhost:8000/threads/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success:', response.data);
            // Handle successful post (e.g., show a toast, redirect, etc.)
        } catch (error) {
            console.error('Error:', error);
            // Handle errors
        }
    };

    return (
        <>
            <Navigation />
            <div className="position-fixed top-0 container-fluid bg-dark" style={{ height: '105px' }}></div>
            <br />
            <Stack gap={2} className="p-5 mt-5">
                <QuillEditor onChange={setEditorContent} />
                <ImageAndTitle onDataSubmit={handleDataSubmit} />
            </Stack>
            <Footer />
        </>
    );
};

export default ForumEditsPage;