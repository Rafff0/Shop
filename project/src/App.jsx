import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Busket from "./components/Busket";

const App = () => {
  const [prod, setProd] = useState([]);
  const [busket, setBusket] = useState([]);

  useEffect(() => {
    totalBusket();
  }, [busket]);

  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((res) => {
        setProd(res);
      });
  }, []);

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

  const totalBusket = () => {
    let total = busket.reduce((a, el) => {
      return a + el.price * el.count;
    }, 0);

    return total;
  };

  return (
    <div className="row">
      <ProductList onMove={moveToCard} items={prod} />
      <Busket
        onCountUp={countPlus}
        onCountDown={countMinus}
        onDelete={deleter}
        onTotal={totalBusket}
        items={busket}
      />
    </div>
  );
};

export default App;
