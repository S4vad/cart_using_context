import { useCartStore } from "./store/cartStore";

const ProductPage = () => {
  const addProduct = useCartStore((state) => state.addCart);
  const cart = useCartStore((state) => state.cart);

  const sampleProducts = [
    { id: 1, name: "Apple Watch" },
    { id: 2, name: "Nike Sneakers" },
    { id: 3, name: "Levi's Jeans" },
    { id: 4, name: "Sony Headphones" },
  ];

  return (
    <div>
      <h1>product page</h1>
      <p>Items in cart:{cart.length}</p>
      <ul>
        {sampleProducts.map((product) => (
          <li
            key={product.id}
            style={{ display: "flex", gap: 10, alignItems: "center" }}
          >
            <span>{product.name}</span>
            <button onClick={() => addProduct(product)}>+ Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
