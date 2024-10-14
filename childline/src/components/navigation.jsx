// navigation.jsx
import logo from '../childline-logo.png';
import '../sources/Nova/js/main.js';
import '../sources/Nova/css/main.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData, endpoints } from '../api/endpoints';
import Cookies from 'js-cookie';

const DropDownLink = ({ link, title }) => {
    const handleClick = (txt) => {
        // Set the cookie with the line category name
        Cookies.set('lineCategoryName', txt);
    };
    return (
        <li className="dropdown">
            <Link to={link.to}>
                <span>{title}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul>
                {/* <li><Link to={link.to}>{link.text}</Link></li> */}
                {link.dropdowns.map((sublink, i) => (
                    <li key={i}><Link to="/help" onClick={()=>{handleClick(sublink.name)}}>{sublink.name}</Link></li>
                ))}
            </ul>
        </li>
    );
};

const Navigation = (props) => {
    const [isSticky, setIsSticky] = useState(false);
    const [categoryitems,setCategoryItems] = useState({})

    const dropdownTitles = [
        "Teachers & professionals",
        "Parents & carers",
        "4–11 year olds",
        "11–18 year olds"
    ];

            const fetchCategories = async (title) => {
                const endpoint = `${endpoints.categoryitems}?service_line_name=${encodeURIComponent(title)}`;
                const data = await fetchData(endpoint); // Adjust the endpoint as necessary
                setCategoryItems(prevItems => ({
                ...prevItems,
                [title]: data  // Example of adding a new category
            }
        ));
    };
    const fetchAllCategories = async () => {
        for (const title of dropdownTitles) {
            await fetchCategories(title);
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        fetchAllCategories();
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(categoryitems)
    return (
        <header id="header" className={`header ${isSticky ? 'sticked' : ''} d-flex align-items-center fixed-top`}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <Link to='/' className="logo d-flex align-items-center">
                    <img src={logo} style={{ filter: 'hue-rotate(120deg)' }} alt="Logo" />
                    <h1 className="d-flex align-items-center">Childline</h1>
                </Link>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><Link to="/login">Contribute to our Blog</Link></li>
                        {dropdownTitles.map((title, index) => (
                        <DropDownLink
                            key={index}
                            link={{
                                to: `/help/`, // Adjust the link as necessary
                                text: title,
                                dropdowns: categoryitems[title]||[] // Moved the comment for clarity
                            }}
                            title={title}
                        />
                    ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;