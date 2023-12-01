import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const handleEmptyCart = () => {
    return emptyCart();
  };
  return (
    <div className="container">
      <h1 className="main-title">Cart</h1>
      {typeof cart[0] !== "undefined" &&
        cart[0].map((prod) => {
          if (Array.isArray(prod) === false) {
            return (
              <div key={prod.id}>
                <br />
                <h3>{prod.titulo}</h3>
                <p>Precio unit: ${prod.precio}</p>
                <p>
                  Precio total: $
                  {isNaN(totalPrice()) !== false
                    ? prod.precio * prod.cantidad
                    : 0}
                </p>
                <p>Cant: {prod.cantidad}</p>
                <br />
              </div>
            );
          }
        })}

      {typeof cart[0] !== "undefined" && cart[0].length > 1 ? (
        <>
          <h2>
            Precio total: ${isNaN(totalPrice()) === false ? totalPrice() : 0}
          </h2>
          <button onClick={handleEmptyCart}>Empty Cart</button>
        </>
      ) : (
        <h2>Your cart is empty :(</h2>
      )}
    </div>
  );
};
