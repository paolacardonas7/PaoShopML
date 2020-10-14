import React from "react";

const Product = ({ product }) => {

  return (
    <div className="product">
      <h2>{product.title}</h2>
      <div>
        <img
          width="200"
          alt={`The product titled: ${product.title}`}
          src={product.thumbnail}
        />
      </div>
      <p>({product.price})</p>
    </div>
  );
};

export default Product;
