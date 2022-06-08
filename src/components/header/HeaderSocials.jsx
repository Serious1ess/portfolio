import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mahmut-muselleti-48a4a8205"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Serious1ess" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.twitch.tv/serious1ess" target="_blank">
        <FaTwitch />
      </a>
    </div>
  );
}

export default HeaderSocials;
