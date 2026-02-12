import useFetch from "./Index";

export default function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  console.log("DATA =>", data, typeof data);
  return (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
