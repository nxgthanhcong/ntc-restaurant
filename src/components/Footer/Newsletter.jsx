import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Bảng tin" />
      <h className="headtext__cormorant">Theo dõi bảng tin của chúng tôi</h>
      <p className="p__opensans">Không bao giờ bỏ lỡ các đợt giảm giá</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" name="" id="" placeholder="Điền email của bạn" />
      <button className="custom__button">Theo dõi</button>
    </div>
  </div>
);

export default Newsletter;
