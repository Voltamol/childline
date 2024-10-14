// forum-details.jsx
import React from 'react';
import { SinglePostContainer } from "../single-post";
import Navigation from '../navigation';
import Footer from "../footer";
import Cookies from 'js-cookie';

const ForumDetailsPage = () => {
    // Retrieve the thread_id from cookies
    const threadId = Cookies.get('thread_id'); // This will return undefined if the cookie doesn't exist

    return (
        <>
            <Navigation />
            <div className="position-fixed top-0 container-fluid bg-dark z-3" style={{ height: '105px' }}></div>
            {threadId ? (
                <SinglePostContainer threadId={threadId} />
            ) : (
                <div className="container mt-5">
                    <h2>No thread selected. Please select a thread to view its details.</h2>
                </div>
            )}
            <Footer />
        </>
    );
}

export default ForumDetailsPage;