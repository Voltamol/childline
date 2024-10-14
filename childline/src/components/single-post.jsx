// single-post.jsx
import React, { useEffect, useState } from 'react';
import { ReadOnlyQuill } from './quill-editor';

const SinglePost = ({ title, category, date, children }) => {
    return (
        <div className="single-post">
            <div className="post-meta">
                <span className="date">{category}</span>
                <span className="mx-1">&bullet;</span>
                <span>{date}</span>
            </div>
            <h1 className="mb-5">{title}</h1>
            {children}
        </div>
    );
}

const PostContainer = ({ title, category, img, children }) => {
    return (
        <div className="col-md-9 post-content" data-aos="fade-up">
            <SinglePost title={title} category={category}>
                {children}
            </SinglePost>
        </div>
    );
}

const SinglePostContainer = ({ threadId }) => {
    const [thread, setThread] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchThread = async () => {
            try {
                const response = await fetch(`http://localhost:8000/threads/${threadId}/`);
                const data = await response.json();
                setThread(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching thread:', error);
                setLoading(false);
            }
        };

        fetchThread();
    }, [threadId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="single-post-content">
            <div className="container">
                <div className="row">
                    <PostContainer category={thread.category} title={thread.title}>
                        <img src={thread.cover_image} alt={thread.title} className="img-fluid mb-3" />
                        <ReadOnlyQuill content={thread.content} />
                    </PostContainer>
                </div>
            </div>
        </section>
    );
}

export { SinglePostContainer };