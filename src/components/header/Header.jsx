import React, { useState } from 'react';
import './header.css';
import Search from '../search/Search';
import { Link, useLocation } from "react-router-dom";
import Order from '../../data/Order';
import { subMenuItems, categories } from '../../data/Categories';

const Header = () => {
    const location = useLocation();
    const [navToggle, showMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenuMobile, setShowSubMenuMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Handle click event for submenu toggle
    const handleSubMenuToggle = () => {
        setShowSubMenu(!showSubMenu);
        // setShowSubMenuMobile(false); // Reset mobile submenu visibility
    };

    const handleSubMenuToggleMobile = () => {
        setShowSubMenuMobile(!showSubMenuMobile);
    };

    // Function to toggle search
    const toggleSearch = () => {
        // Check if nav bar is not toggled
        if (!navToggle) {
            setIsOpen(!isOpen); // Toggle search
        }
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="/index.html" className='logo'>Mollywlove</a>

                <div className={navToggle ? 'nav__overlay' : ''}>
                    <div className={navToggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className='nav__list grid'>
                            <li className="nav__item">
                                <a href="/all" className={`nav__link ${location.pathname === '/all' ? 'active-link' : ''}`}>Все</a>
                            </li>
                            <li className="nav__item">
                                <a href="/new" className={`nav__link ${location.pathname === '/new' ? 'active-link' : ''}`}>Новинки</a>
                            </li>
                            <li className="nav__item">
                                <a href="/bijouterie" className={`nav__link ${location.pathname === '/bijouterie' ? 'active-link' : ''}`}>Бижутерия</a>
                            </li>
                            {/* Left-arrow for small device */}
                            <li className='nav-parent__item grid'>
                                <i className="uil uil-arrow-left left-arrow-icon" onClick={() => window.innerWidth <= 992 && handleSubMenuToggle()}></i>
                                <li className="nav__item"
                                    onMouseEnter={() => window.innerWidth > 992 && setShowSubMenu(true)}  // Hover effect only for large devices
                                    onMouseLeave={() => window.innerWidth > 992 && setShowSubMenu(false)}  // Hover effect only for large devices
                                >
                                    <a href="/clothes" className={`nav__link ${location.pathname === '/clothes' ? 'active-link' : ''}`}>
                                        <div className='parent-item'>
                                            <span className="category-text">Одежда</span>
                                            <i className="uil uil-angle-down down-icon"></i>
                                            {showSubMenu && window.innerWidth > 992 && (
                                                <ul className="sub-menu-desktop__category">
                                                    {subMenuItems.map((item) => (
                                                        <li className='sub-menu__item' key={item.cateName}>
                                                            <Link to={item.url} className={`nav__link sub-menu__link  ${location.pathname === item.url ? 'active-link sub-menu__link' : 'sub-menu__link'}`}>
                                                                {item.display}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </a>
                                </li>
                            </li>

                            <li className="nav__item">
                                <a href="/accessories" className={`nav__link ${location.pathname === '/accessories' ? 'active-link' : ''}`}>Аксессуары</a>
                            </li>

                        </ul>
                    </div>
                    {showSubMenu && window.innerWidth <= 992 && (
                        <ul className="sub-menu__category">
                            <div className='back__container grid'> <i className="uil uil-arrow-right right-arrow-icon" onClick={() => !handleSubMenuToggle()}></i>
                                {window.innerWidth <= 992 && ( // Check for mobile devices
                                    <a href="/clothes" className={`nav__link current-parent ${location.pathname === '/clothes' ? 'active-link' : ''}`}>
                                        Одежда
                                    </a>
                                )}</div>
                            <hr className="header-divider" />

                            {subMenuItems.map((item) => (
                                <li className='sub-menu__item' key={item.cateName}>
                                    <Link to={item.url} className={`nav__link sub-menu__link  ${location.pathname === item.url ? 'active-link sub-menu__link' : 'sub-menu__link'}`}>
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="icon__container">
                    <Search isOpen={isOpen} toggleSearch={toggleSearch} /> {/* Pass the custom toggleSearch function */}
                    {!isOpen && (
                        <Link to='/cart' className="uil uil-shopping-cart-alt cart__icon">
                            <span className='num-orders'>{Order.numOrders}</span>
                        </Link>
                    )}
                    <div className="nav__toggle" onClick={() => showMenu(!navToggle)}>
                        {!navToggle ? <i className='uil uil-bars'></i> : <i className="uil uil-times nav__close" onClick={() => {
                            setShowSubMenu(false); // Close the desktop submenu
                            setShowSubMenuMobile(false); // Close the mobile submenu
                        }}></i>}
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Header;
