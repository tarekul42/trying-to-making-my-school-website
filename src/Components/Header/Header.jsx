import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='w-full backdrop-blur-3xl px-20'>
            <nav className='text-3xl w-11/12 flex justify-between mx-auto items-center h-24'>
                <ActiveLink to="/" >Home</ActiveLink>
                <ActiveLink to="/notice">Notice</ActiveLink>
                <ActiveLink to="/campus">Campus</ActiveLink>
                <ActiveLink to="/teachers">Teachers</ActiveLink>
                <ActiveLink to="/students">Students</ActiveLink>
                <ActiveLink to="/achievements">Achievements</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;




