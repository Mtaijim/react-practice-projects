import { useEffect, useState } from "react";

const Videos = () => {
  const [Videos, Setvideos] = useState([]);
  const [loading, setLoading] = useState(false);
  async function handlevideos() {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      Setvideos(data);
      setLoading(false);
    } catch (error) {
      console.log(error?.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    handlevideos();
  }, []);

  if (loading) return <h1> loading </h1>;
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Videos</h1>
      <table className="w-full bg-white shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th>Views</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {Videos.map((data) => (
            <tr key={data.id} className="border-t">
              <td className="p-2">
                {data.id} : {data.title}
              </td>

              <td>{Math.floor(Math.random() * 10000)}</td>

              <td className="text-green-500">Published</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Videos;
