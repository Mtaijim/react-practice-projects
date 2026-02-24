import { useRef } from "react";
import useFetch from "./Index";

export default function ScrollTopAndBottom() {
  const bottomref = useRef();
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  console.log("DATA =>", data, typeof data);
  function handleClicktop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleBottomClick() {
    bottomref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="wrapper">
      <div>
        <h2>ScollTopAndBottom</h2>
      </div>
      <div>
        <button onClick={handleBottomClick}>Go bottom </button>
      </div>
      {data.map((post) => (
        <p className="products-list" key={post.id}>
          {post.title}
        </p>
      ))}

      <div>
        <button onClick={handleClicktop}>Go top</button>
      </div>
      <div ref={bottomref}></div>
    </div>
  );
}
