import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardTile from "../components/cartTile";
export default function cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart && cart.length ? (
        <>
          <div className=" min-h[100vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex  justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CardTile key={cartItem?.id} cartItem={cartItem} />
              ))}
            </div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold lext-lg"> Your Cart Summary </h1>
              <p>
                <span className="text-gray-800 font-bold ">Total Item</span>
                <span> :{cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold ">Total Amount</span>
                <span className="font-semibold">
                  {" "}
                  : ${Math.trunc(totalCart)}
                </span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h[80vh] flex flex-col items-center justify-center">
          <h1 className=" text-gray-800 font-bold text-xl mb-2">
            Your Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-black px-4 py-2 rounded-xl font-bold text-white">
              {" "}
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
