// posts.jsx
import React, { useEffect, useState } from 'react';
import PostBox from '../post-box';
import Navigation from '../navigation';
import axios from 'axios'; // Ensure axios is installed

const Posts = (props) => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await axios.get('http://localhost:8000/threads/');
                setThreads(response.data); // Assuming response.data is an array
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        };

        fetchThreads();
    }, []);

    return (
        <>
            <Navigation />
            <div className="position-fixed top-0 container-fluid bg-dark" style={{ height: '105px' }}></div>
            <div className="row px-2 pb-3" style={{ marginTop: '115px' }}>
                {threads.map(thread => (
                    <PostBox
                        thread_id={thread.id}
                        key={thread.id}
                        title={thread.title}
                        content={thread.content}
                        coverImage={thread.cover_image}
                        author={thread.author.username}
                        createdAt={thread.created_at}
                    />
                ))}
            </div>
        </>
    );
}

export default Posts;