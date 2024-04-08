import React from "react";
import "../../styles/_product.scss";
import ProductHighlight from "./ProductHighlight";
import ProductMarket from "./ProductMarket";

const ProductDetail = ({ details }) => {
  return (
    <div className="product__highlight">
      <ProductHighlight details={details} />
      <ProductMarket details={details} />
    </div>
  );
};

export default ProductDetail;
