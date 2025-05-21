import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className=" flex gap-10 justify-center p-8 bg-sky-950">
      <Link
        className="bg-sky-300 py-1 p-4 rounded-lg hover:bg-sky-400 cursor-pointer"
        to="/"
      >
        product
      </Link>
      <Link
        className="bg-sky-300 py-1 p-4 rounded-lg cursor-pointer hover:bg-sky-400"
        to="/cart"
      >
        cart
      </Link>
    </div>
  );
};
