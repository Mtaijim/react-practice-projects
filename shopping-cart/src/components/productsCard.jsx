import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlices";
export default function ProductsCard({ products }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const IsInCart = cart.some((item) => item.id === products.id);
  function handleCartAction() {
    if (IsInCart) {
      dispatch(removeFromCart(products.id));
    } else {
      dispatch(addToCart(products));
    }
  }
  return (
    <div className=" flex items-center justify-around gap-3 flex-col border-4 p-4 mt-10 ml-10 ">
      <div className=" flex flex-col items-center justify-center">
        <img className="h-40" src={products?.image} alt={products?.title} />

        <h1 className=" font-bold text-center">
          {products?.title.slice(0, products.title.length / 2)}
        </h1>

        <span className="text-center">
          {" "}
          <p className="font-semibold text-gray-600 uppercase">
            {products?.category}
            <p className="font-bold text-black"> $ {products?.price}</p>
          </p>
        </span>
      </div>{" "}
      <div className="flex justify-center bg-black text-white  px-4 py-2 m-5 rounded-xl ">
        <button onClick={handleCartAction}>
          {IsInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
