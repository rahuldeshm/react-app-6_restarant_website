import React, { useState } from "react";

export const DataContextProvider = (props) => {
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartitemlist, setCartItemList] = useState([
    { name: "Cart is Empty", price: 0, amount: 0 },
  ]);
  const onAdd = (item) => {
    if (noOfItems === 0) {
      setCartItemList([item]);
    } else {
      setCartItemList([...cartitemlist, item]);
    }
    setNoOfItems(noOfItems + parseInt(item.amount));
  };
  const removeItem = (action, id) => {
    const precartitem = [...cartitemlist];

    if (action === "add") {
      precartitem[id].amount += 1;
      setCartItemList(precartitem);
    } else {
      precartitem[id].amount -= 1;
      setCartItemList(precartitem);
    }
  };
  return (
    <DataContext.Provider
      value={{
        onAdd: onAdd,
        removeItem: removeItem,
        cartitemlist: cartitemlist,
        noOfItems: noOfItems,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
const DataContext = React.createContext({
  onAdd: () => {},
  cartitemlist: [],
  noOfItems: 0,
  removeItem: (id) => {},
});

export default DataContext;
