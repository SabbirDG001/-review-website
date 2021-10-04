import React from 'react';
import './Notfound.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div>
            <div className='holder'>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <h5>We’re unable to track the page you are looking for. Click the button to go to the homepage.</h5>
            <Link to='/home'><Button>Home</Button></Link>
            </div>
        </div>
    );
};

export default Notfound;