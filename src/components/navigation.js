//import styling and assets
// import images from './public/images'
import '../style/OS.css';

//import app-elements
import React, { useState } from 'react';
import { navigationItems } from './navigationItems';

const OSnavigation = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <nav>
            {navigationItems.map((item, index) => (
                <div key={index}>
                    {item.submenu ? (
                        <div>
                            <p onClick={() => toggleDropdown(index)}>{item.title}</p>
                            {activeIndex === index && (
                                <div>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <div key={subIndex}>
                                            <a href={subItem.url}>{subItem.title}</a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <a href={item.url}>{item.title}</a>
                    )}
                </div>
            ))}
        </nav>

    );




};

export default OSnavigation;