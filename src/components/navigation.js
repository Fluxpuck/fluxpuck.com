//import styling and assets
// import images from './public/images'
import '../style/Navigation.css';

//import app-elements
import React, { useState } from 'react';
import { navigationItems } from './nav_items';

const OSnavigation = () => {

    // Activates or deactivates the dropdown menu
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleDropdown = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Handles the style of the sub menu item
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='OS-nav-list'>
            {navigationItems.map((item, index) => (
                <div key={index} className='OS-nav-items'>
                    {item.submenu ? (
                        <>
                            <p onClick={() => {
                                toggleDropdown(index);
                                handleClick();
                            }}
                                className={`dropdown-button ${isActive ? 'dropdown-active' : ''}`}>{item.title}</p>
                            {activeIndex === index && (
                                <div className='OS-nav-dropdown'>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <a class="dropdown-item" href={subItem.url}>{subItem.title}</a>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <a href={item.url}>{item.title}</a>
                    )}
                </div>
            ))}
        </nav>
    );
};
export default OSnavigation;