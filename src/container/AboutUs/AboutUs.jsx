import React from 'react';

import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Về chúng tôi</h1>
        <img src={images.spoon} alt="about n" className="spoon__img" />
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Hoạt động hơn 20 năm chúng tôi mang đến cho các bạn các món ngon độc nhất, sự phụ vụ chu đáo và tận tình. Chúng tôi luôn biết cách tạo điều kiện cho bạn được thư giãn và được ăn ngon tại đây
        </p>
        <button type="button" className="custom__button">Xem thêm</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Lịch sử</h1>
        <img src={images.spoon} alt="about n" className="spoon__img" />
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Quán lẩu chiến thành lập từ năm 2000, hoạt động khoảng 10 năm thì xây mới lần 1, 10 năm sau chúng tôi xây mới lần 2 nhầm nâng cao trải nghiệm của các bạn
        </p>
        <button type="button" className="custom__button">Xem thêm</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
