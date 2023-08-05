import React, { useState } from "react";
import classes from "../Components/InputList.module.css";
const InputList = (props) => {
  const [productId, setproductId] = useState("");
  const [productname, setproductname] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [Categorytype, setCategorytype] = useState("ElectronicItems");

  const formHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      id: productId,
      cost: productPrice,
      product: productname,
      chooseacategory: Categorytype,
    };
    localStorage.setItem(productId, JSON.stringify(newProduct));
    props.onUpdate(newProduct);
    setproductId("");
    setproductPrice("");
    setproductname("");
    setCategorytype("ElectronicItems");
  };

  const idChangeHandler = (event) => {
    setproductId(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setproductname(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setproductPrice(event.target.value);
  };
  const CategoryChangeHandler = (event) => {
    setCategorytype(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="Container">
        <h1>Details of Product</h1>
        <form onSubmit={formHandler}>
          <label htmlFor="productId">Product Unique id</label>
          <input
            type="text"
            id="productId"
            name="productId"
            value={productId}
            onChange={idChangeHandler}
            required
          />
          <label htmlFor="productPrice">Selling Price</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={productPrice}
            onChange={priceChangeHandler}
            required
          />
          <label htmlFor="name">Name of Product</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productname}
            onChange={nameChangeHandler}
            required
          />
          <label>Category</label>
          <select
            id="Category"
            onChange={CategoryChangeHandler}
            value={Categorytype}
          >
            <option value="ElectronicItems">Electronic Items</option>
            <option value="FoodItems">Food Items</option>
            <option value="SkinCareItems">SkinCare Items</option>
          </select>
          <button type="submit" className={classes.button}>Add Product</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default InputList;
