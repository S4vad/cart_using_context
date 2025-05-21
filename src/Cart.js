import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.js";

const Cart = () => {
  const { cartItem, removeCart, clearCart } = useContext(CartContext);

  return (
    <div className="p-10 gap-10 flex flex-col place-items-center ">
      {cartItem.length > 0 ? (
        <>
          {" "}
          <ul>
            {cartItem.map((product) => (
              <li className="flex items-center justify-between space-x-8 mb-2 " key={product.id}>
                <p className="text-lg font-semibold">
                  {product.name || "No product in cart"}
                </p>
                <button
                  className="bg-sky-300 place-item-end text-black rounded-md  px-4 hover:bg-sky-400 "
                  onClick={() => removeCart(product.id)}
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="bg-sky-300 place-item-end text-black rounded-md  px-4 hover:bg-sky-400 mx-auto"
            onClick={clearCart}
          >
            clear cart
          </button>
        </>
      ) : (
        <p className="text-lg font-semibold">No item found in cart</p>
      )}
    </div>
  );
};

export default Cart;
