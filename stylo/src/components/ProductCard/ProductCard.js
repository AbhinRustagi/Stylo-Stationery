import React from "react";
import "../../styles/components/productCard.scss";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="productCard">
        <img src={product.img[0]} alt={`${product.name} - Stylo Stationery`} />
        <h4>{product.name}</h4>
        <h5 className="price">₹ {product.MRP}</h5>
        <Link to={`/products/${product.id}`}>
          <button className="view-more">View Product</button>
        </Link>
      </div>
    </Link>
  );
}

export default ProductCard;
