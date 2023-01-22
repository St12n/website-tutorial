import React, {useState} from "react";
import {BiSearch} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {RiCloseFill, RiMenu5Fill} from "react-icons/ri";
import {FaGoodreads, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import './NavbarStyles.css';



function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className='logo'>
                <h2>.logo&#123;Stino&#125;</h2>
            </div>
            <ul className={nav ? 'nav-menu nav-menu-bg' : 'nav-menu'}>
                <li>_About Me</li>
                <li>_Curriculum</li>
                <li>_Contact me</li>
            </ul>
            <div className='nav-icons'>
                <BiSearch className='icon' style={{marginRight: '1rem'}}/>
                <BsPerson className='icon'/>
            </div>
            <div className='hamburger-menu' onClick={handleNav}>
                {!nav ? (<RiMenu5Fill className='icon' style={{fontSize: '2rem'}}/>) : (<RiCloseFill className='icon' style={{fontSize: '2rem'}}/>)}
            </div>


            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <li>_About Me</li>
                    <li>_Curriculum</li>
                    <li>_Contact me</li>
                </ul>
                <div className='mobile-menu-bottom'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='social-icons'>
                        <FaGoodreads className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaLinkedin className='icon'/>
                        <FaGithub className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

