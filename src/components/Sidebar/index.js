import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/medium-transparent-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBloggerB } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
    faFileLines,
    faLaptopCode, 
    faCertificate
  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'> 
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>  
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'> 
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'> 
                    <FontAwesomeIcon icon={faLaptopCode} color='#4d4d4e' />
                </NavLink>   
                {/* <NavLink exact='true' activeclassname='active' className='blog-link' to='/blog'> 
                    <FontAwesomeIcon icon={faBloggerB} color='#4d4d4e' />
                </NavLink> */}
                <NavLink exact='true' activeclassname='active' className='resume-link' to='/resume'> 
                    <FontAwesomeIcon icon={faFileLines} color='#4d4d4e' />
                </NavLink>  
                <NavLink exact='true' activeclassname='active' className='certifications-link' to='/certifications'> 
                    <FontAwesomeIcon icon={faCertificate} color='#4d4d4e' />
                </NavLink>  
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'> 
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>   
            </nav> 
        </div>
    )
}

export default Sidebar;