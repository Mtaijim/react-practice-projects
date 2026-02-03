import React from "react";

const User = ({ user }) => {
  const { avatar_url, bio, followers, following, created_at, name, login } =
    user;
  const createdDate = new Date(created_at);
  return (
    <div className="container">
      <div className="avatar">
        <img src={avatar_url} />
      </div>
      <div className="userName">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on :{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })}  ${createdDate.getFullYear()} `}
        </p>
      </div>
      <div className="followers">
        <div>
          {" "}
          <p>followers:{followers}</p>{" "}
        </div>
        <div>
          {" "}
          <p>following :{following}</p>
        </div>{" "}
      </div>{" "}
      <p> bio: {bio}</p>
    </div>
  );
};

export default User;
