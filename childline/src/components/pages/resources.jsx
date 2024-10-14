// resources.jsx
import React, { useEffect, useState } from 'react';
import Navigation from "../navigation";
import { Filter, FilterContainer } from "../resource-filters";
import { BsArrowUp } from 'react-icons/bs';
import HCard from "../h-card";
import axios from 'axios'; // Ensure axios is installed

const ResourcesLayout = (props) => {
    return (
        <div className="p-2" style={{ marginTop: '100px' }}>
            {props.children}
        </div>
    );
}

const ResourcesPage = (props) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await axios.get('http://localhost:8000/resources/');
                setResources(response.data); // Assuming response.data is an array
            } catch (error) {
                console.error('Error fetching resources:', error);
            }
        };

        fetchResources();
    }, []);

    return (
        <>
            <Navigation />
            <div className="position-fixed top-0 container-fluid bg-dark" style={{ height: '105px' }}></div>
            <ResourcesLayout>
                <div className="pt-5">
                    {resources.map(resource => (
                        <HCard
                            key={resource.id}
                            title={resource.title}
                            content={resource.content}
                            coverImage={resource.cover_image}
                            documentUrl={resource.document}
                        />
                    ))}
                </div>
            </ResourcesLayout>
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center active text-white"><BsArrowUp /></a>
        </>
    );
}

export default ResourcesPage;