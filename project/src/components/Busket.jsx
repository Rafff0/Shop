import React, { useState } from "react";
import BusketItem from "./BusketItem";

const Busket = ({ items, onCountUp, onCountDown, onDelete,onTotal }) => {
  

  return (
    <div>
      <h3>{onTotal()} USD</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((elm) => {
            return (
              <BusketItem
                onCountUp={onCountUp}
                onCountDown={onCountDown}
                onDelete={onDelete}
                id={elm.id}
                key={elm.id}
                {...elm}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Busket;
