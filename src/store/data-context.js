import React, { useState } from "react";

export const DataContextProvider = (props) => {
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartitemlist, setCartItemList] = useState([]);
  const [inCartList, setCartItemId] = useState([]);
  const onAdd = (item) => {
    if (inCartList.indexOf(item.id) !== -1) {
      const list = [...cartitemlist];
      list[inCartList.indexOf(item.id)].amount += parseInt(item.amount);
      setCartItemList(list);
    } else {
      setCartItemId([...inCartList, item.id]);
      setCartItemList([...cartitemlist, item]);
    }
    setNoOfItems(noOfItems + parseInt(item.amount));
  };
  const removeItem = (action, id) => {
    const precartitem = [...cartitemlist];
    const preInCart = [...inCartList];
    if (action === "add") {
      precartitem[id].amount += 1;
      setCartItemList(precartitem);
      setNoOfItems((noOfItems) => noOfItems + 1);
    } else {
      if (precartitem[id].amount === 1) {
        preInCart.splice(id, 1);
        precartitem.splice(id, 1);
        setCartItemId(preInCart);
        setCartItemList(precartitem);
        setNoOfItems((noOfItems) => noOfItems - 1);
      } else {
        precartitem[id].amount -= 1;
        setCartItemList(precartitem);
        setNoOfItems((noOfItems) => noOfItems - 1);
      }
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
