import { Link } from "react-router-dom";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav className=" flex justify-between p-4 bg-black text-white">
        <Link to="/" className="font-bold">
          <FaShoppingBasket size={24} />
          Shopping - Cart
        </Link>
        <Link to="/cart">
          <FaShoppingCart size={24} />
          Cart
        </Link>
      </nav>
    </div>
  );
}
