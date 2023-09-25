import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <ul className="myLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/monster.moon.16503" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/mahmut_muselleti/?hl=en"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com/mahmoudmuselle1" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copyrights">
        <small>&copy; Mahmut Muselleti. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
