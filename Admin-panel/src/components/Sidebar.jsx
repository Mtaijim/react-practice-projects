import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-50 h-screen px-4 py-2  ">
      <h1 className=" font-bold text-2xl mb-8"> Creator-studio</h1>
      <nav className="space-y-4">
        <Link
          to="/"
          className="block hover:bg-gray-100 rounded p-2 font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/Analytics"
          className="block hover:bg-gray-100 rounded p-2 font-medium
        "
        >
          Analytics
        </Link>
        <Link
          to="/Videos"
          className="block hover:bg-gray-100 rounded p-2 font-medium
        "
        >
          Videos
        </Link>
        <Link
          to="/Upload"
          className="block hover:bg-gray-100 rounded p-2 font-medium
        "
        >
          Uploads
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
