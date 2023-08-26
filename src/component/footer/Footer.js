import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>
          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>
          <a href="" className="footer__social-link">
            <FaBehance />
          </a>
        </div>
        <p className="footer__copyright text-cs">&copy; <span>Luique. </span>All right reserved.</p>
        <p className="footer__copyright text-cs">Developed by <span>Awadhesh yadav</span></p>
      </div>
    </footer>
  );
}
