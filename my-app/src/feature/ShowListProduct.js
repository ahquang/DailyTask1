import React from 'react';
import Product from "../components/Product.js";
import { listData } from '../config/listData.js';
import "../styles/listProduct.css"

const ShowListProduct = () => {
    const dataProduct = [...listData];
    console.log(dataProduct);
    return (
        <div className="main-div">
                {
                    dataProduct.map((product, index) => (
                        <Product  product={product}/>
                    ))
                }
        </div>
    );
};

export default ShowListProduct;