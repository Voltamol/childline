import React, { useEffect, useState } from 'react';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from '../childline-logo.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState([]);
    const [email, setEmail] = useState('');
    const [subscriptionMessage, setSubscriptionMessage] = useState('');

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/sociallinks/');
                setSocialLinks(response.data);
            } catch (error) {
                console.error('Error fetching social links:', error);
            }
        };

        fetchSocialLinks();
    }, []);

    const handleSubscribe = async (event) => {
        event.preventDefault();

        const subscriberData = {
            username: email.split('@')[0], // Using the email prefix as username
            email: email,
            password: 'secure', // You can adjust this logic as needed
            authorized_to_edit: false
        };

        try {
            const response = await axios.post('http://localhost:8000/signup/', subscriberData);
            setSubscriptionMessage('Subscription successful!'); // Set success message
            setEmail(''); // Clear input field
        } catch (error) {
            console.error('Error subscribing:', error);
            setSubscriptionMessage('Subscription failed. Please try again.'); // Set error message
        }
    };

    return (
        <footer id="footer" className="footer mt-2 z-3">
            <div className="footer-content">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <Link to="/" className="logo d-flex align-items-center">
                                <img src={logo} style={{ filter: 'hue-rotate(120deg)' }} alt="Childline Logo" />
                                <span>Childline</span>
                            </Link>
                            <br />
                            <br />
                            <div className="social-links d-flex mt-3">
                                {socialLinks.map(link => (
                                    <a key={link.id} href={link.url} className={link.name} target="_blank" rel="noopener noreferrer">
                                        {link.name === "twitter" && <BsTwitter />}
                                        {link.name === "facebook" && <BsFacebook />}
                                        {link.name === "instagram" && <BsInstagram />}
                                        {link.name === "linkedin" && <BsLinkedin />}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 text-start">
                            <br />
                            <br />
                            <h2>Don't miss out</h2>
                            <p>Receive updates on the latest resources, news, and research from Childline</p>
                            <form onSubmit={handleSubscribe} className="d-flex">
                                <input
                                    type="email"
                                    className="form-control me-1"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="btn btn-outline-dark rounded-1" type="submit">Signup</button>
                            </form>
                            {subscriptionMessage && <p className="mt-2">{subscriptionMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;