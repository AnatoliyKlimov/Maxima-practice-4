import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="header-sale">
                    <p className="header-sale__text">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href="#" className="header-sale__link">ShopNow</a>
                </div>
                <nav className="header-navigation">
                    <span className="header-navigation-logo"></span>
                    <ul className="header-navigation-list">
                        <li className="header-navigation-item">
                            <a href="#" className="header-navigationitem__link">Cont</a>
                        </li>
                        <li className="header-navigation-item">
                            <a href="#" className="header-navigationitem__link">Cont</a>
                        </li>
                        <li className="header-navigation-item">
                            <a href="#" className="header-navigationitem__link">Cont</a>
                        </li>
                        <li className="header-navigation-item">
                            <a href="#" className="header-navigationitem__link">Cont</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;