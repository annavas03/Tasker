import React from 'react';
import '../../styles/sidebar.css'
import {SidebarMenu} from "../../constants/navigation.ts";
import {NavLink} from "react-router-dom";


const Sidebar: React.FC = () => {
    return (
        <aside className='container'>
            <div className='logo-holder'>
                <img src={'/assets/logo.png'} alt='logo' className='logo' />
                <h1>Tasker</h1>
            </div>
            <nav className='sidebar-menu'>
                <ul>
                    {SidebarMenu.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}  className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
                            >
                                <img src={item.icon} alt='icon' className='icon' />
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='help-card-center'>
                <div className='help-icon-badge'>
                    <img src={'/assets/question.png'} alt='help' className='question-icon' />
                </div>
                <div className='help-card-body'>
                    <h3 className="help-card-title">Help Center</h3>
                    <p className="help-card-text">
                        Having Trouble in Learning. Please contact us for more questions.
                    </p>
                    <button className="help-card-button">Go To Help Center</button>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar;