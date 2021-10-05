import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        // header part
        <div>
            <nav className='navbar'>
                <div>
                    <Link to='/home'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/teachers'>Teachers</Link>
                    <Link to='/about'>About Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;