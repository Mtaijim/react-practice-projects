import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import ProductsCard from "../components/productsCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, SetLoading] = useState(false);

  async function fetchproducts() {
    SetLoading(true);
    const res = await fetch(" https://fakestoreapi.com/products");
    const data = await res.json();
    if (data) {
      SetLoading(false);
      setProducts(data);
    }
  }
  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <Oval
            height={60}
            width={60}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-6 ">
          {products && products.length
            ? products.map((items) => (
                <ProductsCard key={items.id} products={items} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
