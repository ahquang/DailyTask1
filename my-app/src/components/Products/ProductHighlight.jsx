import React from "react";

const ProductHighlight = ({ details }) => {
  return (
    <div className="product__highlight__item">
      <h4 style={{ fontWeight: 700, fontSize: 14 }}>Product highlights</h4>
      <ul className="product__highlight__item__list">
        {details[0].highlights.map((data) => (
          <li>
            <i
              className="bi bi-check-circle-fill"
              style={{ marginRight: 10, color: "#18A661" }}
            />
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductHighlight;
