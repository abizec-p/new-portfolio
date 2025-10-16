import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDribbbleSquare,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/img/mainlogo.svg";

import "./style.css";
import { useEffect, useState } from "react";
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  function handleLinkClick() {
    isClicked(false);
  }

  function Scrolled() {
    setIsScrolled(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", Scrolled);
    return () => window.removeEventListener("scroll", Scrolled);
  }, []);

  return (
    <section className={isScrolled ? "borderNav" : "nav"}>
      <div className={isClicked ? "mobile-menu" : "menu"}>
        <Link onClick={handleLinkClick} to="/">
          projects
        </Link>
        <Link onClick={handleLinkClick} to="/about">
          about me
        </Link>
        <Link onClick={handleLinkClick} to="contact">
          contact
        </Link>
        <Link onClick={handleLinkClick} to="contact">
          Photography
        </Link>
      </div>
      <div className="logo">
        <Link onClick={handleLinkClick} to="/">
          <img src={logo} alt="abishek pariyar logo" />
        </Link>
      </div>
      <div className={isClicked ? "mobile-socials" : "socials"}>
        <a
          onClick={handleLinkClick}
          target="_blank"
          href="https://github.com/abizec-p"
        >
          <FaGithub />{" "}
        </a>
        <a
          onClick={handleLinkClick}
          target="_blank"
          href="https://www.linkedin.com/in/abishek-pariyar-004b9b1a0/"
        >
          <FaLinkedin />{" "}
        </a>
        <a
          onClick={handleLinkClick}
          target="_blank"
          href="https://www.instagram.com/pariyar_abizake/"
        >
          <FaInstagram />{" "}
        </a>
        <a
          onClick={handleLinkClick}
          target="_blank"
          href="https://dribbble.com/Abizec"
        >
          <FaDribbbleSquare />{" "}
        </a>
      </div>
      <div onClick={handleClick} className="hamburger-menu">
        <RxHamburgerMenu />
      </div>
    </section>
  );
}
