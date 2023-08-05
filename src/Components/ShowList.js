import React from "react";
import classes from'../Components/ShowList.module.css'
const Showlist = (props) => {
  const allItems = props.allItems;

  const deleteOrder = (itemId) => {
    localStorage.removeItem(itemId);
    props.onDeleteOrder(itemId);
  };
  const table1Items = allItems.filter((item) => item.chooseatable === "Table1");
  const table2Items = allItems.filter((item) => item.chooseatable === "Table2");
  const table3Items = allItems.filter((item) => item.chooseatable === "Table3");

  return (
    <div>
      <h1>List of Orders</h1>
      <div>
        <h2>Table 1</h2>
        <ul>
          {table1Items.map((item) => (
            <li key={item.id}>
              {item.dish} - Rs.{item.cost}
              <button  className={classes.buttons} onClick={()=>deleteOrder(item.id)}>Delete Order</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Table 2</h2>
        <ul>
          {table2Items.map((item) => (
            <li key={item.id}>
              {item.dish} - Rs.{item.cost}
              <button  className={classes.buttons} onClick={()=>deleteOrder(item.id)}>Delete Order</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Table 3</h2>
        <ul>
          {table3Items.map((item) => (
            <li key={item.id}>
              {item.dish} - Rs.{item.cost}
              <button className={classes.buttons} onClick={() => deleteOrder(item.id)}>Delete Order</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Showlist;

