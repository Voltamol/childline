import { QuillEditor } from "../quill-editor";
import Footer from "../footer";
import ImageAndTitle from "../image-upload";
import Stack from "react-bootstrap/esm/Stack";
import Navigation from "../navigation";
import { useState } from "react";

const ForumEditsPage = (props) => {
    const [editorContent, setEditorContent] = useState('');

    const handleDataSubmit = ({ title, image }) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('content', editorContent);

        // Post the data to your API
        fetch('/api/your-endpoint', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle successful post (e.g., show a toast, redirect, etc.)
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors
        });
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