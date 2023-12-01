import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const flatCart = storedCart.flat(Infinity);
    return [flatCart];
  });
  const addToCart = (item, cantidad) => {
    cantidad = typeof cantidad === "number" ? cantidad : 1;
    const addedItem = { ...item, cantidad };
    const cartCopy = [...cart[0]];

    const isInCart = cartCopy.find((product) => product.id === addedItem.id);
    if (isInCart) {
      isInCart.cantidad += cantidad;
      setCart(cartCopy);
    } else {
      setCart([...cart[0], addedItem]);
    }
  };

  const cartQuantity = () => {
    return cart[0] && cart[0].length > 0
      ? cart[0].reduce((acc, prod) => acc + prod.cantidad, 0)
      : 0;
  };

  const totalPrice = () => {
    return cart[0].reduce((acc, prod) => {
      if (
        typeof prod === "object" &&
        typeof prod.precio === "number" &&
        typeof prod.cantidad === "number"
      ) {
        return acc + prod.precio * prod.cantidad;
      }
      return acc;
    }, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        totalPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
