import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Your page is not found please go to <Link to="/home">Home</Link> page</h1>
        </div>
    );
};

export default NotFound;