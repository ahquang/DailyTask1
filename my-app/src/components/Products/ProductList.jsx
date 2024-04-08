import React, { useState } from "react";
import "../../styles/_product.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { winner } from "../../constant/winner";
import ProductDetail from "./ProductDetail";
import ButtonCustom from "../Elements/ButtonCustom";

const Product = ({ product }) => {
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  const { isWinner, description, details, img, sale, title } = product;
  return (
    <div className="product">
      {isWinner && <div className="product__banner">{winner}</div>}
      <div className="product__description">
        <div className="product__description__image">
          <img src={img} alt="" />
        </div>
        <div className="product__description__info">
          <div className="product__description__info__title">
            <h3>{title}</h3>
            <span>{sale} OFF</span>
          </div>
          <p className="product__description__info__content">{description}</p>
          <div className="product__description__info__mobile"></div>
          <div className="product__description__info__feature">
            <span>Product feature</span>
            <i className="bi bi-chevron-up" />
          </div>
        </div>
        <div className="product__description__rate">
          <div className="product__description__rate__score">
            <label>9.8</label>
            <span>
              <i className="bi bi-emoji-smile" />
              score
            </span>
          </div>
          <div className="product__description__rate__info">
            <ButtonCustom
              className="product__description__rate__info__btn"
              onClick={handleShowDetail}
            >
              More Info
            </ButtonCustom>
            <div className="product__description__rate__info__price">
              <span>Compare prices</span>
              <i className="bi bi-chevron-down" />
            </div>
          </div>
        </div>
      </div>
      {showDetail && <ProductDetail details={details} />}
    </div>
  );
};

export default Product;
