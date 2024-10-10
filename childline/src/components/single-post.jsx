// import '../sources/ZenBlog/css/main.css'
// import '../sources/ZenBlog/css/variables.css'
import '../sources/ZenBlog/js/main'
import {singlePost} from './sample-data';
import { BsChevronRight,BsPlayFill } from 'react-icons/bs';
import {ReadOnlyQuill} from './quill-editor';
import React, { useEffect, useState } from 'react';
const SinglePost=(props)=>{
    return(
        <div className="single-post">
            <div className="post-meta"><span className="date">{props.category}</span> <span className="mx-1">&bullet;</span> <span>{props.date}</span></div>
            <h1 className="mb-5">{props.title}</h1>
            {props.children}
        </div>
    )
}

const PostContainer=(props)=>{
    return(
        <div className="col-md-9 post-content" data-aos="fade-up">
            <SinglePost title={props.title} figTitle={props.figTitle} category={props.category} img={props.img}>
                {props.children}
            </SinglePost>
        </div>
    )
}

const SinglePostContainer=(props)=>{
    const [editorHtml, setEditorHtml] = useState('');

    useEffect(() => {
        // Fetch content from localStorage(will be using an API for this later)
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            setEditorHtml(savedContent);
        }
    }, []);
    
    return(
        <section class="single-post-content">
            <div class="container">
                <div class="row">
                    <PostContainer  category={singlePost.category}  >
                        {
                            (editorHtml!='')?<ReadOnlyQuill content={editorHtml}/>:<></>
                        }
                        
                       
                    </PostContainer>
                    
                </div>
            </div>
        </section>
    )
}

export {SinglePostContainer};

