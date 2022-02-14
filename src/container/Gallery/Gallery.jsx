import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import './Gallery.css';

const Gallery = () => {

  const listImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05];

  const scrollRef = React.useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Kho ảnh</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>Đây là nơi để các bạn chia sẻ các khoảnh khắc tại quán của chúng tôi</p>
        <button type="button" className="custom__button" style={{ marginTop: "2rem" }}>Xem thêm</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container"
          ref={scrollRef}
        >
          {
            listImages.map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="" />
                <BsInstagram className="app__gallery-images-icon" />
              </div>
            ))
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>

      </div>
    </div>
  );
};

export default Gallery;
