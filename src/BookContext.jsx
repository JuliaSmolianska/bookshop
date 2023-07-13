import React, { createContext, useState, useEffect } from "react";

// JSDoc: https://jsdoc.app/tags-typedef.html
// useful tags: @type - for defining the type of the variable on the next line
// @typedef - for defining a subtype
// @param - for defining a type of a function parameter
// @returns - for defining the type of variable that a function returns

export const BookContext = createContext({
  state: {
    cart: [
      {
        id: "default id",
        image: "default image",
        pris: null,
      },
    ],
  },
  addToCart: (book) => {},
  removeFromCart: (id) => {},
  increase: (id) => {},
  decrease: (id) => {},
});


export const LOCAL_STORAGE_NAME = "book_personal_site_items";

export const BookContextProvider = ({ children }) => {
  /**
   * @typedef {{id: string, image: string, pris: null | number}} CartElement
   * @type {{cart: CartElement[]} | undefined}
   */
  let storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
   if (storedItems && storedItems.cart && Array.isArray(storedItems.cart)) {
    // do nothing. all is good
   } else {
    storedItems = {cart: []};
  };
  console.log(storedItems);
  const [state, setState] = useState(storedItems);

  useEffect(() => {
    console.log(state);
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
  }, [state]);

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <BookContext.Provider
      value={{ state, setState, addToCart, increase, decrease, removeFromCart }}
    >
      {children}
    </BookContext.Provider>
  );
};
