import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="zzz chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Đầu bếp của chúng tôi" />
      <h1 className="headtext__cormorant">Điều gì làm nên một ngày của chúng tôi</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Phục vụ đến các bạn những món ăn ngon, lạ mắt, không kém phần vệ sinh an toàn làm nên một ngày của chúng tôi
          </p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Nguyen Van Chien</p>
        <p className="p__opensans">Đầu bếp & Nhà sáng lập</p>
        <img src={images.sign} alt="zzz" />
      </div>
    </div>
  </div>
);

export default Chef;
