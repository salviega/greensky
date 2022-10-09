import "./GreenSkyFooter.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export function GreenSkyFooter() {
  return (
    <footer className="footer">
      <div className="footer-head"></div>
      <div className="footer-body">
        <p className="footer-body__copyright">©skywood 2022</p>
        <div className="footer-network">
          <a className="footer-network__item" href="https://t.me/salviega">
            LinkedIn
          </a>
          <a
            className="footer-network__item"
            href="https://www.linkedin.com/in/salviega/"
          >
            Telegram
          </a>
          <a
            className="footer-network__item"
            href="https://github.com/salviega/greensky"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
