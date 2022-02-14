import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.qlc1} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Trang chủ</a></li>
        <li className="p__opensans"><a href="#about">Về chúng tôi</a></li>
        <li className="p__opensans"><a href="#menu">Thực đơn</a></li>
        <li className="p__opensans"><a href="#awards">Giải thưởng</a></li>
        <li className="p__opensans"><a href="#contact">Liên hệ</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Đăng nhập/Đăng kí</a>
        <div></div>
        <a href="/" className="p__opensans">Đặt bàn</a>
      </div>

      <div className="app__navbar-smallscren">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {
          toggleMenu && <div className="app__navbar-smallscren_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscren_links">
              <li className="p__opensans"><a href="#home">Trang chủ</a></li>
              <li className="p__opensans"><a href="#about">Về chúng tôi</a></li>
              <li className="p__opensans"><a href="#menu">Thực đơn</a></li>
              <li className="p__opensans"><a href="#awards">Giải thưởng</a></li>
              <li className="p__opensans"><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
        }


      </div>
    </nav>
  )
};

export default Navbar;
