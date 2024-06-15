import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Busket from "./components/Busket";

const App = () => {
  const [prod, setProd] = useState([
    {
      id: 101,
      title: "Psycoogy",
      price: 20,
      photo:
        "data:image/png;base64,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",
    },
    {
      id: 102,
      title: "Politics",
      price: 100,
      photo:
        "https://m.media-amazon.com/images/I/71egR+xVYGL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 103,
      title: "Math",
      price: 50,
      photo:
        "https://m.media-amazon.com/images/I/71lDUGfRa8L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 104,
      title: "Physycs",
      price: 320,
      photo:
        "https://m.media-amazon.com/images/I/81c7eY723TL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 105,
      title: "History",
      price: 99,
      photo:
        "https://images.squarespace-cdn.com/content/v1/5877ca6986e6c00f05f58f84/1616529078025-0H8KYK9YHKLBA3O5EHQN/the-science-of-science-cover.jpg",
    },
  ]);
  const [busket, setBusket] = useState([]);

  const moveToCard = (id) => {
    let found = prod.find((x) => x.id == id);
    if (busket.find((x) => x.id == id)) {
      countPlus(id);
      return;
    }
    setBusket([...busket, { ...found, count: 1 }]);
  };

  const countPlus = (id) => {
    setBusket([
      ...busket.map((el) => {
        if (el.id == id) {
          el.count++;
        }
        return el;
      }),
    ]);
  };
  const countMinus = (id) => {
    setBusket(
      busket.map((el) => {
        if (el.id == id) {
          el.count < 2 ? el.count : el.count--;
        }
        return el;
      })
    );
  };
  const deleter = (id) => {
    setBusket(
      busket.filter((el) => {
        return el.id != id;
      })
    );
  };
  const discountFn = () => {
    setBusket(
      busket.map((el) => {
        if (el.count >= 3) {
          el.price = Math.ceil((el.price * (el.count - 1)) / el.count);
        }
        return el;
      })
    );
  };
  return (
    <div className="row">
      <ProductList onMove={moveToCard} items={prod} />
      <Busket
        onCountUp={countPlus}
        onCountDown={countMinus}
        onDelete={deleter}
        onDiscount={discountFn}
        items={busket}
      />
    </div>
  );
};

export default App;
