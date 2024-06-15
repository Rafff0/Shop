import React from "react";

const BusketItem = ({
  title,
  price,
  count,
  onCountUp,
  onCountDown,
  onDelete,
  id,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{count * price}</td>
      <td>
        <button onClick={() => onCountUp(id)}>+</button>
        <button onClick={() => onCountDown(id)}>-</button>
        <button onClick={() => onDelete(id)}>X</button>
      </td>
    </tr>
  );
};

export default BusketItem;
