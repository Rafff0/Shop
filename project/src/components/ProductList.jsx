import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ items, onMove }) => {
  return (
    <div className="list">
      {items.map((elem) => {
        return <ProductItem onMove={onMove} {...elem} key={elem.id} />;
      })}
    </div>
  );
};

export default ProductList;
