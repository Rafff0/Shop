import React from "react";

const ProductItem = ({ title, id, photo, price, onMove }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={photo} alt="" />
      <p>
        <strong>{price}USD</strong>
      </p>
      <button onClick={() => onMove(id)}>Move</button>
    </div>
  );
};

export default ProductItem;
