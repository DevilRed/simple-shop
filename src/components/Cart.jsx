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
      {cart.map((prod) => (
        <div key={prod.id}>
          <br />
          <h3>{prod.titulo}</h3>
          <p>Precio unit: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          <p>Cant: {prod.cantidad}</p>
          <br />
        </div>
      ))}
      {cart.length > 0 ? (
        <>
          <h2>Total price: ${totalPrice()}</h2>
          <button onClick={handleEmptyCart}>Empty Cart</button>
        </>
      ) : (
        <h5>Cart is empty</h5>
      )}
    </div>
  );
};
