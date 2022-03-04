import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Components/Items";
import FoodLoader from "./images/foodLoading.gif";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [orders, setOrders] = useState([]);
  const hook = () => {
    axios.get("http://localhost:3000/items").then((response) => {
      console.log(response.data);

      setOrders(response.data);
    });
  };
  useEffect(hook, []);

  return (
    <div className="App">
      <Header></Header>
      {orders.length === 0 ? (
        <div style={{ top: "50%", left: "50%" }}>
          <img alt="Loading..." src={FoodLoader}></img>
        </div>
      ) : (
        <Items orders={orders} />
      )}
    </div>
  );
}

export default App;
