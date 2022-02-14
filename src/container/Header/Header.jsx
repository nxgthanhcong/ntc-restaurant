import React from 'react';
import { SubHeading } from '../../components';

import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Hương vị đồng quê" />
      <h1 className="app__header-h1">nơi nhậu lý tưởng</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Với hơn 20 năm thành lập, đến với chúng tôi bạn sẽ được thưởng thức các món đặc trưng tại quán kèm theo đó là khoảng thời gian vui vẻ cùng bạn bè bên cạnh view Sân Banh thoáng mát
      </p>
      <button type="button" className="custom__button">Khám phá Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome img" />
    </div>
  </div>
);

export default Header;
