import ProductPage from "./ProductPage";
import Cart from "./Cart";
import { CartProvider } from "./context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Layout from "./Layout";
import './index.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductPage /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
