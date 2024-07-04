// src/components/AccountSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AccountSidebar.css';

const AccountSidebar = () => {
    return (
        <>
        <aside className="account-sidebar">
            <Link to="/womanFashion" className="account-option">Woman’s Fashion</Link>
            <Link to="/menFashion" className="account-option">Men’s Fashion</Link>
            <Link to="/electronics" className="account-option">Electronics</Link>
            <Link to="/homeLifestyle" className="account-option">Home & Lifestyle</Link>
            <Link to="/medicine" className="account-option">Medicine</Link>
            <Link to="/sportsOutdoor" className="account-option">Sports & Outdoor</Link>
            <Link to="/babyToys" className="account-option">Baby’s & Toys</Link>
            <Link to="/groceriesPets" className="account-option">Groceries & Pets</Link>
            <Link to="/healthBeauty" className="account-option">Health & Beauty</Link>
        </aside>
        </>
    );
};

export default AccountSidebar;