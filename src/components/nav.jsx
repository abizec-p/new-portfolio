import { Link } from 'react-router-dom';
import { FaGithub,FaLinkedin,FaInstagram,FaDribbbleSquare   } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import "./style.css"
import { useEffect, useState } from 'react';
export default function Nav(){

    const [isScrolled, setIsScrolled] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(!isClicked);
    }

    function Scrolled(){
        setIsScrolled(window.scrollY > 0);
    }

    useEffect(() =>{
        window.addEventListener("scroll", Scrolled);
        return () => window.removeEventListener("scroll", Scrolled);
    },[]);


    return(
        <section  className={isScrolled?"borderNav":"nav"}>
            <div className={isClicked?"mobile-menu":"menu"}>
                <Link to="/" >projects</Link>
                <Link to="/about">about me</Link>
                <Link to="contact">contact</Link>
            </div>
            <div className='logo'>
                <h1>Abizec</h1>

            </div>
            <div className={isClicked?"mobile-socials":'socials'}>
                <a href=""><FaGithub /> </a>
                <a href=""><FaLinkedin  /> </a>
                <a href=""><FaInstagram  /> </a>
                <a href=""><FaDribbbleSquare   /> </a>

                
            </div>
            <div onClick={handleClick} className='hamburger-menu'><RxHamburgerMenu />
            </div>

        </section>
    )
}
