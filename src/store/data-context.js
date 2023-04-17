import React, { useState } from "react";

export const DataContextProvider = (props) => {
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartitemlist, setCartItemList] = useState([
    { name: "Cart is Empty", price: 0 },
  ]);
  const onAdd = (item) => {
    if (noOfItems === 0) {
      setCartItemList([item]);
    } else {
      setCartItemList([...cartitemlist, item]);
    }
    setNoOfItems(noOfItems + parseInt(item.amount));
  };

  return (
    <DataContext.Provider
      value={{ onAdd: onAdd, cartitemlist: cartitemlist, noOfItems: noOfItems }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
const DataContext = React.createContext({
  onAdd: () => {},
  cartitemlist: [],
  noOfItems: 0,
});

export default DataContext;
