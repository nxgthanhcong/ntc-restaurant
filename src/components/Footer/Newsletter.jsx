import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h className="headtext__cormorant">Subscribe To Our Newsletter</h>
      <p className="p__opensans">And never miss new updates</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" name="" id="" placeholder="Enter your email" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
