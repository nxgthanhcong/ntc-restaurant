import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <div className="app__footer-headtext">Contact Us</div>
        <p className="p__opensans">1102 Huynh Tan Phat, P.Tan Phu, Q7, TP HCM</p>
        <p className="p__opensans">01234534536</p>
        <p className="p__opensans">01234534536</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo footer" />
        <p className="p__opensans">The best way zd asd as d sad  d d gs dg s s g sd  g</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: "15px" }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <div className="app__footer-headtext">Working Hours</div>
        <p className="p__opensans">1102 Huynh Tan PhaTP HCM</p>
        <p className="p__opensans">01234534536</p>
        <p className="p__opensans">1102 Huynh Tan PhaTP HCM</p>
        <p className="p__opensans">01234534536</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Ng Thanh Cong. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
