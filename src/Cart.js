import React from "react";
import { useCartStore } from "./store/cartStore";

const Cart = () => {
const cart = useCartStore((state) => state.cart);
const removeCart = useCartStore((state) => state.removeCart);
const clearCart = useCartStore((state) => state.clearCart);


  return (
    <div>
      {cart.length > 0 ? (
        <>
          {" "}
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <p>{product.name || "No product in cart"}</p>
                <button onClick={() => removeCart(product.id)}>-</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>clear cart</button>
        </>
      ) : (
        <p>No item found in cart</p>
      )}
    </div>
  );
};

export default Cart;
