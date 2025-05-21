import { useContext } from "react";
import { CartContext } from "./context/CartContext.js";

const ProductPage = () => {
  const { cartItem, addProduct } = useContext(CartContext);

  const sampleProducts = [
    { id: 1, name: "Apple Watch" },
    { id: 2, name: "Nike Sneakers" },
    { id: 3, name: "Levi's Jeans" },
    { id: 4, name: "Sony Headphones" },
  ];

  return (
    <div className="gap-10 flex flex-col place-items-center p-10">
      <p className="text-lg text-gray-100 font-semibold ">Items in cart:{cartItem.length}</p>
      <ul>
        {sampleProducts.map((product) => (
          <li className="flex items-center justify-between space-x-8 mb-2" key={product.id} >
            <span className="text-lg font-semibold">{product.name}</span>
            <button className="bg-sky-300 place-item-end text-black rounded-md  px-4 hover:bg-sky-400 " onClick={() => addProduct(product)}>+ Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
