import React from 'react';

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Thực đơn của chúng tôi" />
      <h1 className="headtext__cormorant">Đặc biệt ngày hôm nay</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Món ăn</p>
        <div className="app__specialMenu-menu_items">
          {
            data.wines.map((wine, index) => (
              <MenuItem key={wine.title}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))
          }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="zzz" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Rượu & Bia</p>
        <div className="app__specialMenu-menu_items">
          {
            data.cocktails.map((cocktail) => (
              <MenuItem key={cocktail.index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))
          }
        </div>
      </div>

    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">Xem thêm</button>
    </div>

  </div>
);

export default SpecialMenu;
