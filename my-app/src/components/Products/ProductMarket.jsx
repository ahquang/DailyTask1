import React from "react";
import ButtonCustom from "../Elements/ButtonCustom";

const ProductMarket = ({ details }) => {
  return (
    <div className="product__highlight__item">
      <h4 style={{ fontWeight: 700, fontSize: 14 }}>Product highlights</h4>
      <ul className="product__highlight__item__brand">
        {details[0].market.map((data) => (
          <li>
            <span className="product__highlight__item__brand__name">
              <i className={data.icon}></i>
              <label>{data.name}</label>
            </span>
            <a href={data.link} target="_blank">
              <ButtonCustom className="product__highlight__item__brand__button">
                Go to
              </ButtonCustom>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductMarket;
