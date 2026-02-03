import React, { useEffect, useState } from "react";
import User from "./User";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubuser() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubuser();
  }, []);

  if (loading) return <h2>Loading......</h2>;
  function handleSubmit() {
    fetchGithubuser();
  }
  return (
    <div className="Wrapper">
      <div className="input-container">
        <div className="input">
          <input
            type="text"
            placeholder="ENTER YOUR GITHUB USERNAME "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="btn-Container">
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
      <div className="user-container">{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
};

export default App;
