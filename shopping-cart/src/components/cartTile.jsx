import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlices";

export default function CardTile({ cartItem }) {
  const dispatch = useDispatch();
  function RemoveFromCart() {
    dispatch(removeFromCart(cartItem?.id));
  }
  return (
    <div className=" flex items-center justify-around flex-wrap gap-3 border-2 p-4 mt-10 ml-10 ">
      {
        <div>
          {" "}
          <img className="h-40 " src={cartItem?.image} alt={cartItem?.title} />
          <h1>{cartItem?.title.slice(0, cartItem.title.length / 3)}</h1>
          <p className="font-bold">${cartItem?.price}</p>
          <div>
            <button
              onClick={RemoveFromCart}
              className="bg-black px-2 py-1 rounded-xl font-medium text-white"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      }
    </div>
  );
}
