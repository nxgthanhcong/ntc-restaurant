import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import "./ScrollTop.css";

const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const ScrollTop = (props) => (
  <div className="app__scrollTop">
    <BsArrowUpShort className="app__scrollTop-icon"
      onClick={() => ScrollToTop()}
    />
  </div>
);

export default ScrollTop;
