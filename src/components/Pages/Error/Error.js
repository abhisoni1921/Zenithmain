import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">4<span className="zero">0</span>4</h1>
                <div className="error-message">
                    <h2>Oops! Page Not Found</h2>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                </div>
                <Link to="/" className="home-button">
                    <span> Back to Homepage</span>
                </Link>
            </div>
        </div>
    );
};

export default Error;