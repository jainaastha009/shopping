import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'about', text: 'about' },
    { id: 3, url: 'products', text: 'product' },
    { id: 4, url: 'cart', text: 'cart' },
    { id: 5, url: 'checkout', text: 'checkout' },
    { id: 6, url: 'orders', text: 'orders' },
];

const Navlinks = () => {
    // Safely destructure the state
    const { user, isGuest } = useSelector((state) => state.UserState || { user: null, isGuest: false });

    return (
        <>
            {links.map((link) => {
                const { id, url, text } = link;
                // Allow checkout and orders only if a user is logged in
                if ((url === 'checkout' || url === 'orders') && isGuest) return null;
                return (
                    <li key={id}>
                        <NavLink className='capitalize' to={url}>
                            {text}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );
};

export default Navlinks;
