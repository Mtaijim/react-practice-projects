import React, { useEffect, useState } from "react";
import Suggestion from "./suggestion";
const App = () => {
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [Searchparam, setSearchparam] = useState("");
  const [showDrop, setShowdrop] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleclick(value) {
    setShowdrop(false);
    setSearchparam(value);
    setFilteredUsers([]);
  }

  function handlechange(event) {
    const query = event.target.value.toLowerCase();
    setSearchparam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query) > -1)
          : [];
      setShowdrop(filteredData.length > 0);
      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers([]);
      setShowdrop(false);
    }
  }
  async function fetchListofUser() {
    try {
      setloading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((Useritem) => Useritem.firstName));
        setloading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchListofUser();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search user"
            value={Searchparam}
            onChange={handlechange}
          />
        </div>
      )}
      {showDrop && <Suggestion onclick={handleclick} data={filteredUsers} />}
    </div>
  );
};

export default App;
