import { FaGithub,FaLinkedin,FaInstagram,FaDribbbleSquare   } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(){
    return<>
    <div className="footer">
        <div className="footer-logo" >
            <h1>Abizec</h1>
            <p>I am a front end web developer with expersite in reactjs. Feel free to reach me out via any of my contact method. <br />
                <br />Thank you and have a nice day.
            </p>
        </div>
        <div className="footer-contact-details">
            <h1>Contact details</h1>
            <li>+14376651393</li>
            <li>pariyarabishek60@gmail.com</li>
            <li>Mississauga, ON, Canada</li>
        </div>
        <div className="footer-socials">
           
        </div>
        <div className="footer-menu">
            <h1>Menu</h1>
                <Link to="/" >projects</Link>
                <Link to="/profile">about me</Link>
                <Link to="contact">contact</Link>
                <div className='socials'>
                            <a href=""><FaGithub /> </a>
                            <a href=""><FaLinkedin  /> </a>
                            <a href=""><FaInstagram  /> </a>
                            <a href=""><FaDribbbleSquare   /> </a>
            
                            
                        </div>
        </div>
    </div>
    
    </>

}