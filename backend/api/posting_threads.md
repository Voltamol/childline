```jsx
import React, { useState } from 'react';
import axios from 'axios';

const ThreadForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [coverImage, setCoverImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('author', authorId);
        formData.append('cover_image', coverImage);

        try {
            const response = await axios.post('http://localhost:8000/threads/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Author ID:</label>
                <input
                    type="text"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cover Image:</label>
                <input
                    type="file"
                    onChange={(e) => setCoverImage(e.target.files[0])}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ThreadForm;
```