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
        <div className="app__footer-headtext">Liên hệ</div>
        <p className="p__opensans">Quán Lẩu Chiến, sân banh Nhị Quý, ấp Quý Thành, xã Nhị Quý, TX Cai Lậy, tỉnh Tiền Giang</p>
        <p className="p__opensans">0396-814-176</p>
        <p className="p__opensans">0393-814-176</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.qlc1} alt="logo footer" />
        <p className="p__opensans">"Cách tốt nhất để tìm lại chính mình là đánh mất chính mình để phục vụ người khác."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: "15px" }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <div className="app__footer-headtext">Giờ mở cửa</div>
        <p className="p__opensans">Thứ 2 - Thứ 6</p>
        <p className="p__opensans">11h - 19h</p>
        <p className="p__opensans">Thứ 7 - Chủ Nhật</p>
        <p className="p__opensans">15h - 19h</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Ng Thanh Cong. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
