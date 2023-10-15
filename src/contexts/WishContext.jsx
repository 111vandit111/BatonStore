import React, { createContext, useState } from "react";

export const WishContext = createContext();

const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  const addToWish = (product, id) => {
    setWish([...wish, product]);
  };

  const removeFromWish = (id) => {
    const newWish = wish.filter((item) => {
      return item.id !== id;
    });

    setWish(newWish);
  };

  const emptyWish = () => {
    setWish([]);
  };

  return (
    <WishContext.Provider
      value={{ removeFromWish, addToWish, emptyWish, wish }}
    >
      {children}
    </WishContext.Provider>
  );
};

export default WishProvider;
