import React from 'react';
import ProductList from "../components/Products/ProductList.jsx"
import { listData } from '../config/listData.js';
import "../styles/_container.scss"

const ShowListProduct = () => {
    return (
        <div className="main-div">
                {
                    listData.map((product) => (
                        <ProductList  product={product}/>
                    ))
                }
        </div>
    );
};

export default ShowListProduct;