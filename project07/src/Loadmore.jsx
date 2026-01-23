import { useEffect, useState } from "react";

const Loadmore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=6`,
      );

      const result = await response.json();

      setProducts((prev) => {
        const updated = [...prev, ...result];

        if (updated.length > 30) {
          alert("You reached your max limit!");
          return prev; // stop updating
        }
        setLoading(false);
        return updated;
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [page]);
  if (loading) {
    return <div className="loading"> </div>;
  }

  return (
    <div className="Loadmore_container">
      <h2 style={{ textAlign: "center" }}>Load More App</h2>
      <div className="products-container">
        {products && products.length
          ? products.map((items) => (
              <div className="product" key={items.id}>
                <img
                  style={{ width: 300, height: 200 }}
                  src={items.download_url}
                  alt={items.author}
                />
                <p>{items.author}</p>
              </div>
            ))
          : null}
        <div></div>{" "}
      </div>{" "}
      <button onClick={() => setpage(page + 1)}> load more produts </button>
    </div>
  );
};

export default Loadmore;
