import React, { useState } from "react";
import classes from "../Components/InputList.module.css";
const InputList = (props) => {
  const [dishId, setDishId] = useState("");
  const [dishname, setDishname] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [tableNumber, setTableNumber] = useState("Table1");

  const formHandler = (event) => {
    event.preventDefault();
    const newItem = {
      id: dishId,
      cost: dishPrice,
      dish: dishname,
      chooseatable: tableNumber,
    };
    localStorage.setItem(dishId, JSON.stringify(newItem));
    props.onUpdate(newItem);
    setDishId("");
    setDishPrice("");
    setDishname("");
    setTableNumber("Table1");
  };

  const idChangeHandler = (event) => {
    setDishId(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setDishname(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setDishPrice(event.target.value);
  };
  const TableNumberChangeHandler = (event) => {
    setTableNumber(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="Container">
        <h1>Details of Order</h1>
        <form onSubmit={formHandler}>
          <label htmlFor="dishid">Dish Unique id</label>
          <input
            type="text"
            id="dishid"
            name="dishid"
            value={dishId}
            onChange={idChangeHandler}
            required
          />
          <label htmlFor="dishprice">Price</label>
          <input
            type="number"
            id="dishprice"
            name="dishprice"
            value={dishPrice}
            onChange={priceChangeHandler}
            required
          />
          <label htmlFor="name">Name of the Dish</label>
          <input
            type="text"
            id="name"
            name="name"
            value={dishname}
            onChange={nameChangeHandler}
            required
          />
          <label>Table Number</label>
          <select
            id="tablenumber"
            onChange={TableNumberChangeHandler}
            value={tableNumber}
          >
            <option value="Table1">Table1</option>
            <option value="Table2">Table2</option>
            <option value="Table3">Table3</option>
          </select>
          <button type="submit" className={classes.button}>Place Order</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default InputList;
