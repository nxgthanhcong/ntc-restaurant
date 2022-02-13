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
      <SubHeading title="Chef Words" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <p className="p__opensans">
          's standard dummy text ever since the 1500s
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Ng Van Chien</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="zzz" />
      </div>
    </div>
  </div>
);

export default Chef;
