import React from "react";
import classes from'../Components/ShowList.module.css'
const Showlist = (props) => {
  const allItems = props.allItems;

  const deleteProduct = (itemId) => {
    localStorage.removeItem(itemId);
    props.onDeleteProduct(itemId);
  };
  const ElectronicItems = allItems.filter((item) => item.chooseacategory === "ElectronicItems");
  const FoodItems = allItems.filter((item) => item.chooseacategory=== "FoodItems");
  const SkinCareItems = allItems.filter((item) => item.chooseacategory === "SkinCareItems");

  return (
    <div>
      <h1>List of Products</h1>
      <div>
        <h2>Electronic Items</h2>
        <ul>
          {ElectronicItems.map((item) => (
            <li key={item.id}>
              {item.product} - Rs.{item.cost}
              <button  className={classes.buttons} onClick={()=>deleteProduct(item.id)}>Delete Product</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Food Items</h2>
        <ul>
          {FoodItems.map((item) => (
            <li key={item.id}>
              {item.product} - Rs.{item.cost}
              <button  className={classes.buttons} onClick={()=>deleteProduct(item.id)}>Delete Product</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Skincare Items</h2>
        <ul>
          {SkinCareItems.map((item) => (
            <li key={item.id}>
              {item.product} - Rs.{item.cost}
              <button className={classes.buttons} onClick={() => deleteProduct(item.id)}>Delete Product</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Showlist;

