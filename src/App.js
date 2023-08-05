import React, { useState, useEffect } from "react";
import "./App.css";
import InputList from "./Components/InputList";
import Showlist from "./Components/ShowList";

function App() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const itemsArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      const item = { id: key, ...value };
      itemsArray.push(item);
    }
    setAllItems(itemsArray);
  },[]);

  const updateItems = (newItem) => {
    setAllItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteProduct = (itemId) => {
    setAllItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <InputList onUpdate={updateItems} />
      <Showlist allItems={allItems} onDeleteProduct={deleteProduct} />
    </div>
  );
}

export default App;


