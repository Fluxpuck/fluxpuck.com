// Navigation Items
const navigationItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Projects',
        url: '',
        submenu: [
            {
                title: 'Hyper(+)',
                url: '/projects?=hyper-bot'
            },
            {
                title: 'Hyper Dashboard',
                url: '/projects?=hyper-dashboard'
            },
            {
                title: 'Sero',
                url: '/projects?=sero-bot'
            },
            {
                title: 'Chatbot Collection',
                url: '/projects?=discord-bots'
            },
            {
                title: 'S6 Portfolio (NextJS)',
                url: '/projects?=nextjs-app'
            },
            {
                title: 'AI_Denity',
                url: '/projects?=aidentity'
            },
            {
                title: '...',
                url: '/projects'
            }
        ]
    },
    {
        title: 'Contact',
        url: '/contact',
    }
]
import React, {useState} from "react";

export default function Navigation() {

    // Activates or deactivates the dropdown menu
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleDropdown = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Handles the style of the sub menu item
    const [isActive, setIsActive] = useState(false);
    const handleStyle = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="flex gap-2">
            {navigationItems.map((item, index) => (
                <div key={index} className="cursor-pointer relative">
                    {item.submenu ? (
                        <>
                            <p onClick={() => {
                                toggleDropdown(index);
                                handleStyle();
                            }}
                               className={`dropdown-button ${isActive ? 'dropdown-active' : ''}`}>{item.title}</p>
                            {activeIndex === index && (
                                <div className="flex flex-col bg-mac-body-light absolute">
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
    )
}